<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './../../../style/mixin.scss';
.showlist-enter-active, .showlist-leave-active {
  transition: all .3s;
  transform: translateY(0);
}
.showlist-enter, .showlist-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}
.desc-head{
  padding-top:.1rem;
}
.weui-media-box_appmsg{
  &:before{
    display:none;
  }
}
.weui-media-box_appmsg .weui-media-box__hd{
  @include wh(.8rem,.8rem)
}
.list{
  @include disFlex();
  flex-wrap:wrap;
  .item{
    width:50%;
    .pic{
      width:100%;
      height:.5rem;
      &:nth-child(2n+1){
        padding-right:.01rem;
      }
      img{
        width:100%;
        height:100%;
      }
    }
    .text{
      padding: .1rem;
      p{
        @include multiTextOverflow(2);
        padding-right:20%;
      }
    }
  }
}
nav{
  padding:.1rem 0px;
  .btn{
    border:.01rem solid #999;
    border-radius:.2rem;
    padding:.05rem .2rem;
  }
}
</style>

<template>
	<div class="second-container" ref="parentEl">  
  <!-- v-infiniteScroll="getData" -->
    <div class="inner-container" v-if="data.length > 0" ref="parentEl">
  		<header class="desc-head">  
        <div class="blur-background" :style="'background-image:url('+ data[0].coverImgUrl +'?param=100y100)'">
        </div>
    		<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="data[0].coverImgUrl+'?param=200y200'" alt="">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">精品歌单</h4>
            <h3 class="weui-media-box__title">{{data[0].name}}</h3>
            <p class="weui-media-box__desc">{{data[0].description}}</p>
          </div>
        </a>
  		</header>
      <nav>
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
              <span class="btn">全部歌单</span>
          </div>
          <div class="weui-cell__ft">
          </div>
        </a>
      </nav>
      <section>
        <transition name="showlist" v-if="data">
            <div class="list">
              <div class="item" v-for="(x,index) in data" @click="$router.push({name:'albumDetail',params:{id:x.id,coverImgUrl:x.coverImgUrl}})">
                <div class="pic" :style="{'height':itemHeight+'px'}">
                  <img :src="x.coverImgUrl" alt="">
                </div>
                <div class="text">
                  <p>{{x.name}}</p>
                </div>
              </div>
            </div>
        </transition>
      </section>
    </div>
    <v-infiniteScroll @loadmore="getData" :loading="loading" :parentEl="parentEl" />
	</div>
</template>

<script>
import vInfiniteScroll from '../../../components/v-infiniteScroll.vue'
import fetch from '../../../config/fetch'
import {getSongList} from '../../../config/api'
export default {
  components:{vInfiniteScroll},
  data () {
    return {
      data:[],
      offset:0,
      // listNode:null,
      itemHeight:window.innerWidth/2,
      parentEl:null,
      loading:false
    }
  },
  created(){
    this.getData();
  },
  mounted(){
    this.parentEl = this.$refs.parentEl;
  },
  computed:{
  },
  methods:{
    async getData(){
      this.loading = true;
      let re = await getSongList(this.offset);
      this.data = this.data.concat(re.playlists);
      this.offset += 10;
      this.loading = false;
    },
  }
}
</script>