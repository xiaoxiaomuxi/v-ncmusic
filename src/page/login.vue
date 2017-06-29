<style lang="scss" scoped>
@import './../style/mixin.scss';
section{
	padding-top:0.4rem;
	padding-bottom:0.3rem;
	.weui-cell__hd{
		padding-right:.1rem;
	}
}
.weui-btn{
	border-radius:.2rem;
	margin:0 .1rem;
}
</style>
<template>
	<div>
		<music-header title="手机号登录"></music-header>
		<section>
			<div class="weui-cell">
	      <div class="weui-cell__hd"><i class="iconfont icon-shouji"></i></div>
	      <div class="weui-cell__hd">+86</div>
	      <div class="weui-cell__bd">
	          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model="postData.phone">
	      </div>
	    </div>
			<div class="weui-cell">
	      <div class="weui-cell__hd"><i class="iconfont icon-mima"></i></div>
	      <div class="weui-cell__bd">
	          <input class="weui-input" type="password" placeholder="请输入密码" v-model="postData.password">
	      </div>
	    </div>
		</section>
    <a class="weui-btn weui-btn_primary" @click="login">登录</a>
	</div>
</template>
<script>
import {getLogin} from '../config/api'
import {mapMutations} from 'vuex'
import musicHeader from '../components/music-header.vue'
export default {
  components:{
    musicHeader
  },
  data () {
    return {
      postData:{},
    }
  },
  created(){
    // this.login();
  },
  filters: {

  },

  methods:{
  	...mapMutations([
  	    'RECORD_USERINFO',
  	]),
    async login(){
      let re = await getLogin(this.postData.phone,this.postData.password);
      //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
      if (re.code!=200) {
      	this.$toast(re.msg)
      }else{
      	this.$toast('登录成功');
        this.RECORD_USERINFO(re);
        this.$router.go(-1);
      }
    },
  }
}
</script>