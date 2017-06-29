<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './../../style/mixin.scss';
.weui-cell i{
  padding-right:.1rem;
  font-size:.20rem;
  color:$red;
}
.gap{
  @include disFlex();
  span{
    @include flex();
    i{
    	padding-right:.1rem;
    }
  }
}
.weui-media-box{
  padding:.08rem;
  width:100%;
  align-self: center;
}
section .icon-section{
  color:#999
}
.weui-media-box_appmsg .weui-media-box__hd{
  @include wh(50px,50px)
}
</style>

<template>
	<div class="">
		<header>
			<div class="weui-cells" style="margin-top:0">
			    <a class="weui-cell weui-cell_access" href="javascript:;">
		        <div class="weui-cell__hd">
		          <i class="iconfont icon-yinle"></i>
		        </div>
		        <div class="weui-cell__bd">
		            <p>本地音乐</p>
		        </div>
			    </a>
			    <a class="weui-cell weui-cell_access" href="javascript:;">
			        <div class="weui-cell__hd">
			          <i class="iconfont icon-zuijinbofang"></i>
			        </div>
			        <div class="weui-cell__bd">
			            <p>最近播放</p>
			        </div>
			    </a>
			    <a class="weui-cell weui-cell_access" href="javascript:;">
			        <div class="weui-cell__hd">
			          <i class="iconfont icon-xiazai"></i>
			        </div>
			        <div class="weui-cell__bd">
			            <p>下载管理</p>
			        </div>
			    </a>
			    <a class="weui-cell weui-cell_access" href="javascript:;">
			        <div class="weui-cell__hd">
			          <i class="iconfont icon-diantai"></i>
			        </div>
			        <div class="weui-cell__bd">
			            <p>我的电台</p>
			        </div>
			    </a>
			    <a class="weui-cell weui-cell_access" href="javascript:;">
			        <div class="weui-cell__hd">
			          <i class="iconfont icon-shoucang"></i>
			        </div>
			        <div class="weui-cell__bd">
			            <p>我的收藏</p>
			        </div>
			    </a>
			</div>
		</header>
		<div class="gap">
		  <span><i class="iconfont icon-xiala"></i>创建的歌单(23)</span>
		  <i class="iconfont icon-shezhi1"></i>
		</div>
		<section class="weui-panel" style="margin-top:0">
			<a href="javascript:void(0);" class="disFlex" v-for="x in playlist" @click="$router.push({name:'albumDetail',params:{id:x.id}})">
				<a class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
				    <img class="weui-media-box__thumb" :src="x.coverImgUrl" alt="">
					</div>
					<div class="weui-media-box__bd">
				    <h4 class="weui-media-box__title">{{x.name}}</h4>
				    <p class="weui-media-box__desc">{{x.trackCount}}首</p>
					</div>
				</a>
				<a class="weui-media-box flex">
					<i class="iconfont icon-section"></i>
				</a>
      </a>
		</section>
	</div>
</template>

<script>
import fetch from '../../config/fetch'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      playlist:null
    }
  },
  computed:{
  	...mapState([
  		'userInfo'
		])
  },
  created(){
  	if(this.userInfo){
  		this.getData();
  	}
  },
  methods:{
  	async getData(){
  		let re = await fetch('GET','/api/user/playlist',{uid:this.userInfo.profile.userId,offser:0,limit:100,csrf_token:''});
  		this.playlist = re.playlist;
  	},
  }
}
</script>
