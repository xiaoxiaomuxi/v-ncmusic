<style lang="scss" scoped>
@import './../style/mixin.scss';
.search-bar{
  display:flex;
  background:$red;
  height:$header_height;
  .btn{
    i{color:#fff}
    height:$header_height;
    line-height:$header_height;
    padding:0 .1rem;
  }
  .input{
    padding:0 .06rem .06rem 0;
    flex:1;
    input{
      width:100%;
      color:#fff;
      height:100%;
      background:$red;
      border-bottom:.01rem solid #ccc;
      &:focus{
        border-bottom:.01rem solid #eee;
      }
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button {
      // display:none;
    }
    ::placeholder{
      color:#fff;
      opacity:.5;
      font-size:.14rem;
    }
  }
}
.weui-cells{margin-top:0;background:transparent}
.weui-cell{
  justify-content:center;
  font-size:.14rem;
  // border-bottom:0.5px solid #ccc;
}
ul{
  padding:0 .1rem;
  display:flex;
  flex-wrap:wrap;
  li{
    padding-right:.1rem;
    padding-bottom:.1rem;
    .badge{
      border-radius:.3rem;
      border:1px solid #ccc;
      padding:.02rem .1rem;
    }

  }
}

</style>
<template>
	<div>
    <div class="search-bar">
      <div class="btn">
        <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      </div>
      <div class="input">
        <input type="search" placeholder="搜索音乐、歌手、歌词、用户" requied> 
      </div>
    </div>
    <div class="weui-cells">
      <a class="weui-cell">
          <div class="weui-cell__hd">
            <i class="iconfont icon-geshou"></i>
          </div>
          <div class="weui-cell__bd" style="padding-left:.1rem;flex:initial">
              歌手分类
          </div>
      </a>
    </div>
    <div class="gap">热门搜索</div>
    <ul class="badge-list">
      <li class="item"><div class="badge">欢乐颂2</div></li>
      <li class="item"><div class="badge">欢乐颂2</div></li>
      <li class="item"><div class="badge">欢乐sdfsdf颂2</div></li>
      <li class="item"><div class="badge">欢乐颂2</div></li>
      <li class="item"><div class="badge">欢乐颂2</div></li>
    </ul>
    
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
import crypto from 'crypto'
import musicHeader from '../components/music-header.vue'
import fetch from '../config/fetch'
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
  }
}
</script>