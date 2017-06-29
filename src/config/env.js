let BaseApiUrl;
if (process.env.NODE_ENV !== 'production'){
    BaseApiUrl = '';
}else{
    BaseApiUrl = 'http://music.163.com';
}
export {
    BaseApiUrl,
}