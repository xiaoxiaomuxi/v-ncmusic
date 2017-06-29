import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    isLogin:null, //是否登录
    userInfo:null, //用户信息
    isSign:null, //是否签到
    playInfo:null, //正在播放的歌曲
    musicDom:null,
    playState:true,
    playList:[],
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})