// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './config/preload'
import Vue from 'vue'
import store from './store/'
import App from './App'
import router from './router'
import './config/plugins.css'
import plugins from './config/plugins'
Vue.use(plugins);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})

Vue.prototype.$debounce = function(fn, delay) {
  var ctx;
  var args;
  var timer = null;

  var later = function () {
    fn.apply(ctx, args);
    // 当事件真正执行后，清空定时器
    timer = null;
  };

  return function () {
    ctx = this;
    args = arguments;
    // 当持续触发事件时，若发现事件触发的定时器已设置时，则清除之前的定时器
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 重新设置事件触发的定时器
    timer = setTimeout(later, delay);
  };
}



Vue.filter('artists', function (value) {
  let string='';
  if(value.length>0){
    for(var x of value){
      string += x.name+',';
    }
    return string.substring(0,string.length-1);
  }else{
    return '演唱者'
  }
})


// Vue.directive('infiniteScroll', {
//   // 当绑定元素插入到 DOM 中。
//   inserted: function (el,binding,vnode) {
//     // 聚焦元素
//     let oldScrollTop = 0;
//     let debounce = Vue.prototype.$debounce(binding.value,100);
//     // console.log(this)
//     el.addEventListener('scroll',function(e){
//       // let parentNode = el;
//       let childNode = el.childNodes[0];
//       let childHeight = childNode.offsetHeight;
//       let parentHeight = el.offsetHeight;
//       let scrollTop = el.scrollTop;
//       // console.log(scrollTop-oldScrollTop)
//       //滚动到底部执行加载方法
//       if((childHeight-scrollTop-2 <= parentHeight)&&(scrollTop>oldScrollTop)){
//         debounce();
//       }
//       oldScrollTop = scrollTop //用于判断下一帧是向上还是向下
//     })
    
//   },
//   update:function(el){

//   }
// })