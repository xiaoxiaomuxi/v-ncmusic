<style lang="scss" scoped>
@import '../style/mixin.scss';

footer{
	height:$footer_height;
	background:#fff;
	align-items: center;
	display: flex;
	position: absolute;
	z-index: 100;
	bottom: 0;
	width: 100%;
	background-color: #f7f7fa;
	.pic{
		margin-left:.04rem;
		height:.4rem;
		width:.4rem;
		img{
			width:100%;
			height:100%;
		}
	}
	.desc{
		@include flex();
		padding-left:.1rem;
		p{
			font-size:.14rem;
			@include multiTextOverflow(1);
		}
		span{
			font-size:.12rem;
			color:#999;
			@include multiTextOverflow(1);
			
		}
	}
	.bar{
		i{
			padding-right:.16rem;
			font-size:.24rem;
		}
	}
	.weui-actionsheet{
		$cell_height:.4rem;
		text-align:left;
		font-size:.14rem;
		background:#fff;
		.header{
			height:$cell_height;
			line-height:$cell_height;
			padding:0 .1rem;
			display:flex;
			.cell{
				padding-left:.1rem;
			}
			div i{
				padding-right:.04rem;
			}
		}
		.weui-actionsheet__menu{
			overflow:scroll;
			height:$cell_height*5;
			.weui-cell{
				text-align:left;
				font-size:.14rem;
				padding:0 .1rem;
				height:$cell_height;
				line-height:$cell_height;
				.cell-title{
					flex:1;
					padding-left:.04rem;
					@include multiTextOverflow(1);
					span{
						font-size:.12rem;
						color:#999;
					}
					&.active{
						color:$red;
					}
				}
				i{
					color:#999;
				}
			}
		}

	}
}

</style>
<template>
	<footer class="tabbar">	
		<div class="pic"  @click="playInfo.id&&$router.push({name:'player'})">
			<img :src="playInfo.al.picUrl+'?param=50y50'" alt="">
		</div>
		<div class="desc" @click="playInfo.id&&$router.push({name:'player'})">
			<p>{{playInfo.name?playInfo.name:'请选择要播放的音乐'}}</p>
			<span>{{playInfo.ar||'' | artists}}</span>
		</div>
		<div class="bar">
			<i class="iconfont" :class="playState?'icon-bofang':'icon-zanting'" @click="play"></i>
			<i class="iconfont icon-zhengzaibofang" @click="showPlayList=true"></i>
		</div>
		<div>
	    <div class="weui-mask" :style="{opacity:Number(showPlayList)}" v-show="showPlayList" @click="showPlayList=!showPlayList"></div>
	    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':showPlayList}">
        <div class="header">
					<div class="flex">
						<i class="iconfont icon-liebiaoxunhuan"></i>列表循环({{playList.length}})
					</div>
					<div class="cell"><i class="iconfont icon-tianjia"></i>收藏</div>
					<div class="cell" @click="clearPlayList"><i class="iconfont icon-laji"></i>清空</div>
        </div>
        <div class="weui-actionsheet__menu">
          <div class="weui-cell" v-for="x in playList">
          	<p class="cell-title" :class="{'active':x==playInfo}">
          		{{x.name}}<span> - {{x.ar|artists}}</span>
        		</p>
          	<i class="iconfont icon-shanchu"></i>
          </div>
        </div>
	    </div>
    </div>
	</footer>
</template>
<script>
import Encrypt from '../config/crypto.js';
import musicHeader from './music-header.vue'
import {mapState,mapActions} from 'vuex'
import fetch from '../config/fetch'
export default{
	components:{
		musicHeader
	},
	props:{

	},
	data(){
		return{
			showPlayList:false,
		}
	},
	created(){
		// console.log(this.playInfo)
	},
	computed:{
		...mapState([
			'playInfo','playState','playList',
		])
	},
	watch:{

	},
	methods:{
		...mapActions([
			'play','clearPlayList'
		])

	}
}
</script>