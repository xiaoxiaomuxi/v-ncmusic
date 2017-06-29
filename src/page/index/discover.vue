<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './../../style/mixin.scss';
header.second-nav{
  position:relative;
  left:0;
  width:100%;
}
.navbar{
  @include disFlex();
  background:#fff;
  .item{
    @include flex();
    text-align:center;
    padding:.1rem;
    &.active{
      color:$red;
      position:relative;
      &:after{
        position:absolute;
        content:'';
        width:100%;
        height:.02rem;
        background:$red;
        left:0;
        bottom:0;
      }
    }
  }
}
.parent-container{
  height:inherit;
}
</style>

<template>
	<div class="parent-container" :style="{height:innerHeight+'px'}">
		<header class="second-nav">
  		<div class="navbar">
        <div class="item" :class="{'active':$route.name=='recommend'}" @click="$router.replace({name:'recommend'})">
            个性推荐
        </div>
        <div class="item" :class="{'active':$route.name=='songList'}" @click="$router.replace({name:'songList'})">
            歌单
        </div>
        <div class="item" :class="{'active':$route.name=='fmList'}" @click="$router.replace({name:'fmList'})">
            电台
        </div>
        <div class="item" :class="{'active':$route.name=='rankingList'}" @click="$router.replace({name:'rankingList'})">
            排行榜
        </div>
       </div>
		</header>
    <!-- <section class="second-container has-navbar"> -->
      <transition name="router-slide" mode="out-in">
        <router-view></router-view>
      </transition>
    <!-- </section> -->
	</div>
</template>

<script>
import fetch from '../../config/fetch'
export default {
  data () {
    return {
      innerHeight:window.innerHeight-110*window.innerWidth/375
    }
  },
  created(){

  }
}
</script>
