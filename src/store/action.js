import fetch from '../config/fetch';
import {getUrl} from '../config/api';

export default {
	async sign({commit,state}) {
		let res = await fetch('GET','/api/point/dailyTask',{type:1});
		if(res.code==200){
			commit('SIGN_IN');
		}
	},
	async initLocal({commit,dispatch,state}){
		await commit('INIT_USERINFO');
		commit('INIT_PLAYINFO');
		// dispatch('initAudio',dom);
	},
	async initAudio({dispatch,commit,state},dom){
		await commit('INIT_AUDIO',dom);
		try{
			dispatch('selectSong',state.playInfo)
		}catch(e){
			// throw new Error();
		}
	},
	async selectSong({dispatch,commit,state},playInfo) {
		if(playInfo.id){
			commit('RECORD_PLAYINFO',playInfo);
			if(JSON.stringify(state.playList).indexOf(JSON.stringify(playInfo))==-1){
				commit('RECORD_PLAYLIST',playInfo);
			}
			let id = playInfo.id;
			let re = await getUrl(id);
			if(re.code==200) {
				state.musicDom.src = re.data[0].url;
				commit('PLAY');
			}
		}else{
			commit('PAUSE');
		}
		// dispatch('play');
	},
	async play({commit,state}){
		if(state.playInfo.id){
			if (state.playState==false){
	      commit('PLAY')
	    }else {
	      commit('PAUSE')
	    }
		}else{
			_this.$toast('没有音乐')
		}
	},
	async clearPlayList({dispatch,commit,state}){
		state.musicDom.src = null;
		commit('PAUSE');
		commit('CLEAR_PLAYINFO');
		commit('CLEAR_PLAYLIST');
	}
}