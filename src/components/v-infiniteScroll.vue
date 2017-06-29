<!-- Author：Ron0115：
该需要注入Container的DOM元素，此组件需要放在Container末端用于显示正在加载中的状态样式-->
<style lang='scss' scoped>
</style>

<template>
  <v-loading :loading="loading" :text="text" />
</template>

<script>
import vLoading from './v-loading.vue'
export default {
  components:{vLoading},
  name:'v-infiniteScroll',
  props:{
    loading:{
      type:Boolean,
      default:false
    },
    parentEl:{
      type:HTMLDivElement,
      default:null
    },
    text:{
      type:String,
      default:'正在加载'
    }
  },
  data () {
    return {
      oldScrollTop:0
    }
  },
  watch:{
    parentEl:function(val,oldVal){
      let _this = this;
      if(val&&oldVal==null){
        // let debounce = this.$debounce(_this.$emit('loadmore')`,2000);

        let el = this.parentEl;
        el.addEventListener('scroll',function(e){
          if(_this.loading) return;
          // let parentNode = el;
          let childNode = e.target.childNodes[0];
          let childHeight = childNode.offsetHeight;
          let parentHeight = e.target.offsetHeight;
          let scrollTop = e.target.scrollTop;
          // console.log(scrollTop-oldScrollTop)
          //滚动到底部执行加载方法
          if((childHeight-scrollTop-20 <= parentHeight)&&(scrollTop>_this.oldScrollTop)){
            // debounce();
            _this.$emit('loadmore')
          }
          _this.oldScrollTop = scrollTop //用于判断下一帧是向上还是向下
        })
      }
      this.isInit = true
    }
  },
  methods:{

  },
  mounted(){
    
  },
}
</script>
