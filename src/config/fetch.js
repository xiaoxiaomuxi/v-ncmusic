// import {
//     BaseApiUrl
// } from './env'

export default async(type = 'GET', url = '', data = {}, method = '') => {
    type = type.toUpperCase();
    // url = BaseApiUrl + url;

    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            credentials: 'include',  //跨域保存cookie
            method: type,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/json;charset=utf-8',
                'Origin':'*',
            },
            mode: "cors",
            cache: "force-cache",
        }

        if (type == 'POST') {
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            })
            Object.defineProperty(requestConfig, 'body', {
                // value: JSON.stringify(data)
                value:dataStr
            })
            // requestConfig.body = data;
        }

        try {
            var response = await fetch(url, requestConfig);
            var responseJson = await response.json();
        } catch (error) {
            throw new Error(error)
        }
        return responseJson
    } else {
        return new Promise((resolve,reject)=>{
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }

            let sendData = '';
            if (type == 'POST') {
                sendData = JSON.stringify(data);
            }
            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response;
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        if(obj){
                            resolve(obj);
                        }
                        // return obj  //这里会报undefined
                    } else {
                        // throw new Error(requestObj)
                        reject(requestObj)
                    }
                }
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);
        });
    }
}