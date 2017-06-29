<!-- Author：Ron0115：
该需要注入Container的DOM元素，此组件需要放在Container末端用于显示正在加载中的状态样式-->
<style lang='scss' scoped>
.big-loadmore{
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  font-size: .16rem;
  text-align: center;
  bottom: .4rem;
  .weui-loading{
    background:transparent url('static/loading.png') center center no-repeat;
    background-size:100% 100%;
    width:1rem;
    height:1rem;
    animation: rotating 5s linear infinite;
  }
  @keyframes rotating {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  span{
    display:block;
    margin-top:.1rem;
    font-size:.14rem;
  }
}
</style>

<template>
  <div class="weui-loadmore" :class="{'big-loadmore':size=='big'}" v-show="loading">
      <i class="weui-loading"></i>
      <span class="weui-loadmore__tips">{{text}}</span>
  </div>
</template>

<script>
export default {
  name:'v-loading',
  props:{
    loading:{
      type:Boolean,
      default:false
    },
    text:{
      type:String,
      default:'正在加载'
    },
    size:{
      type:String,
      default:'small'
    }
  },
  data () {
    return {

    }
  },
  mounted(){
    
  },
}
</script>
