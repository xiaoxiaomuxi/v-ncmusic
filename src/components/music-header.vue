<style lang="scss" scoped>
@import '../style/mixin.scss';
nav.parent-nav{
	position:relative;
	top:0;
	left:0;
	width:100%;
	z-index: 100;
	background:$red;
}
nav.transparent-nav{
  background:transparent;
}
.tab{
	height:$header_height;
	width:100%;
	position:relative;
	color:#fff;
	display:flex;
}
.navbar{
	// position:relative;
	width:50%;
	height:100%;
	@include disFlex();
}
.navbar__item{
  @include flex();
	background:$red;
	height:100%;
	padding:0;
  text-align:center;
	.iconfont{
		color:#ddd;
		font-size:0.20rem;
		height: $header_height;	
   	line-height: $header_height; 
	}
  &.active{
    i{
      color:#fff;
      font-weight:bold;
      font-size:.24rem;
    }
  }
}
.nav-right{
	position:relative;
	text-align:right;
	flex:1;
	right:0;
	height:$header_height;
	line-height:$header_height;
	i{
		color:#fff;
		font-size:.16rem;
		padding-right:.1rem;
	}
}
.nav-left{
	text-align:left;
	display:flex;
	align-items:center;
	.text{
		display:flex;
		flex-direction:column;
		align-items:center;
		text-align:left;
		line-height:initial;
		.title{
			font-size:.14rem;
			color:#fff;
			width:100%;
			@include multiTextOverflow(1);
		}
		.desc{
			color:#ccc;
			font-size:.12rem;
			width:100%;
			@include multiTextOverflow(1);
		}
	}

	@extend .nav-right;
	left:10px;
	right:inherit;
	// flex:inherit;
}
.weui-actionsheet{
	min-width:80%;
	width:auto;
	height:100%;
	overflow:hidden;
  transform: translateX(-100%);
  display:flex;
  flex-direction:column;
  &.weui-actionsheet_toggle {
      transform: translate(0);
  }
	.weui-actionsheet__title{
		background-size:100% 100%;
		overflow:hidden;
		height:20%;
		flex-direction:row;
		align-items:center;
		justify-content:flex-start;
		.avatar{
			width:.6rem;
			img{
				border-radius:.5rem;
			}
			p{
				color:#fff;
				span{

				}
			}
		}
		.btn{
			color:#fff;
			border-radius:.08rem;
			border:.01rem solid #fff;
			padding:.02rem .08rem;
		}
	}
	.weui-actionsheet__menu{
		flex:1;
		background:#efeff4;
		.weui-cell{
			background:#fcfcfd;
			&:active{
				background:#ececec;
			}
		}
	}
	.weui-actionsheet__action{
		justify-content:center;
		.weui-cell{
			padding:.1rem .2rem;
		}
	}
	.weui-cell__bd{
		padding-left:.1rem;
		p{font-size:.14rem;}
		.badge{
			background:$red;
			width:.2rem;
			height:.2rem;
			line-height:.2rem;
			border-radius:.1rem;
			color:#fff;
			text-align:center;
			font-size:.12rem;
		}
	}
}
.gap{
	height:.1rem;
	line-height:.1rem;
}
</style>
<template>
	<nav class="parent-nav">
		<div class="tab">
			<div class="nav-left" :style="title&&'flex:initial;'">
	    	<i class="iconfont icon-list" v-if="contain.menu==true" @click="showMenu=!showMenu"></i>
	    	<i class="iconfont icon-fanhui" v-if="contain.back==true" @click="$router.back()"></i>
	    	<div class="text">
	    		<p class="title">{{title}}</p>
	    		<p class="desc">{{desc}}</p>
	    	</div>
			</div>
	    <div class="navbar" v-if="contain.navbar==true">
        <div class="navbar__item" :class="{'active':$route.matched[1].name=='my'}" @click="$router.push({name:'my'})">
          <i class="iconfont icon-yinle"></i>
        </div>
        <div class="navbar__item" :class="{'active':$route.matched[1].name=='discover'}" @click="$router.push({name:'discover'})">
          <i class="iconfont icon-yunyinyue"></i>
        </div>
        <div class="navbar__item" :class="{'active':$route.matched[1].name=='friends'}" @click="$router.push({name:'friends'})">
          <i class="iconfont icon-haoyou"></i>
	        </div>
	    </div>
	    <div class="nav-right">
	    	<i class="iconfont icon-chaxun" v-if="contain.search==true" @click="$router.push({name:'search'})"></i>
	    	<i class="iconfont icon-section" v-if="contain.select==true"></i>
	    	<i class="iconfont icon-fenxiang" v-if="contain.share==true"></i>
	    </div>
		</div>
		<div class="menu">
      <div class="weui-mask" v-show="showMenu" :style="{opacity:Number(showMenu)}" @click="showMenu=!showMenu"></div>
      <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':showMenu}">
          <div class="weui-actionsheet__title" :style="'background-image:url('+userInfo.profile.backgroundUrl+'?param=400y200)'">
          		<div class="flex">
          			<div class="avatar">
          				<img :src="userInfo.profile.avatarUrl">
          				<p>{{userInfo.profile.nickname||'请登录'}}</p>
          			</div>
          		</div>
              <div class="btn" v-if="isLogin" @click="sign()">{{isSign?'已签到':'签到'}}</div>
          </div>
          <div class="weui-actionsheet__menu">
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-xiaoxi"></i>
                  </div>
                  <div class="weui-cell__bd disFlex">
                      <p class="flex">我的消息</p>
                      <!-- <span class="badge">8</span> -->
                  </div>
              </a>
              <div class="gap"></div>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-friend"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>我的好友</p>
                  </div>
              </a>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-fujin"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>附近的人</p>
                  </div>
              </a>
              <div class="gap"></div>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-huanfu"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>个性皮肤</p>
                  </div>
              </a>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-yunpan"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>音乐云盘</p>
                  </div>
              </a>
          </div>
          <div class="weui-actionsheet__action disFlex">
						<a class="weui-cell weui-cell_access">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-night"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>夜间模式</p>
						    </div>
						</a>
						<a class="weui-cell weui-cell_access">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-shezhi1"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>设置</p>
						    </div>
						</a>
						<a class="weui-cell weui-cell_access" @click="logout()" v-if="isLogin">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-tuichu"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>退出</p>
						    </div>
						</a>
						<a class="weui-cell weui-cell_access" @click="$router.push({name:'login'})" v-if="!isLogin">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-erji"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>登录</p>
						    </div>
						</a>
          </div>
      </div>
  </div>
	</nav>
</template>
<script>
import {mapMutations,mapState,mapActions} from 'vuex'
export default{
	props:{
		contain:{
			type:Object,
			default:()=>{
				return{
					navbar:false,
					back:true,
					menu:false,
					search:false,
					select:false,
					share:false
				}
			}
		},
		title:{
			type:String,
			default:'',
		},
		desc:{
			type:String,
			default:''
		}
	},
	data(){
		return{
			showMenu:false,
		}
	},
	computed: {
	    ...mapState([
	        'userInfo','isSign','isLogin'
	    ]),
	},
	methods:{
		...mapMutations([
		    'OUT_LOGIN',
		]),
		...mapActions([
			'sign'
		]),
		async logout(){
			this.OUT_LOGIN();
			this.showMenu = false;
			this.$toast('退出成功');
		},
	}
}
</script>