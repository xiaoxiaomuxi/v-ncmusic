import fetch from './fetch'
import crypto from 'crypto'

const API = 'https://api.imjad.cn/cloudmusic/';
const _API = 'http://musicapi.duapp.com/api.php';



export let getLogin = async (phone,password) => {
	const md5sum = crypto.createHash('md5')
  	md5sum.update(password);
  	password  = md5sum.digest('hex');
	let re = await fetch('GET','/api/login/cellphone',{phone:phone,password:password,rememberLogin:true});
	return re;
}
//取得音乐地址
export let getUrl = (id) => fetch('GET',API, {
	type:'song',
	br:128000,
	id:id
})

//推荐歌单
export let getSongList= (offset) => fetch('GET',_API,{
	offset:offset,
	limit:10,
	type:'topPlayList',
	cat:'全部'
});

//歌单详情
export let getAlbumDetail = (id) => fetch('GET',API,{
	type:'playlist',
	id:id,
})