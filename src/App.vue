<style>
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
<template>
  <div id="app">
    <!-- <transition name="router-fade" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <audio src="" autoplay="autoplay"  ref="player"></audio>
  </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex'
export default {
  name: 'app',
  data(){
    return{

    }
  },
  methods:{
    ...mapActions([
        'initLocal'
    ]),
    ...mapMutations([
      'INIT_USERINFO','INIT_PLAYINFO'
    ])
  },
  created(){
    // this.INIT_USERINFO();
    // this.INIT_PLAYINFO();
    this.$store.dispatch('initLocal');


  },
  computed:{
    ...mapState([
      'playInfo'
    ])
  },
  mounted(){
    this.$store.dispatch('initAudio',this.$refs.player);
  }
}
</script>
<style lang='scss'>
  @import 'style/common.scss';
  @import url('http://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css');
  @import url('http://at.alicdn.com/t/font_wmjemf1ohe0cnmi.css')
</style>

