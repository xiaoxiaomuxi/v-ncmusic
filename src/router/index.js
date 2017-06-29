import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path:'',
      redirect:'/index/discover/songList'
    },
    {
      path: '/index',name: 'index',
      redirect:'/index/discover/songList',
      component: resolve => require(['../page/index.vue'], resolve),
      children:[
        {
          path:'my',name:'my',
          component:resolve => require(['../page/index/my.vue'], resolve)
        },
        {
          path:'discover',
          redirect:'/index/discover/songList'
        },
        {
          path:'discover',name:'discover',
          component:resolve => require(['../page/index/discover.vue'], resolve),
          children:[
          {
            path:'recommend',name:'recommend',
            component:resolve => require(['../page/index/discover/recommend.vue'], resolve),
          },
          {
            path:'songList',name:'songList',
            component:resolve => require(['../page/index/discover/songList.vue'], resolve),
          },
          {
            path:'fmList',name:'fmList',
            component:resolve => require(['../page/index/discover/fmList.vue'], resolve),
          },
          {
            path:'rankingList',name:'rankingList',
            component:resolve => require(['../page/index/discover/rankingList.vue'], resolve),
          }
        ]
      },{
        path:'friends',name:'friends',
        component:resolve => require(['../page/index/friends.vue'], resolve)
      }]
    },
    {
      path:'/albumDetail/:id',name:'albumDetail',
      component:resolve => require(['../page/albumDetail.vue'],resolve),
    },
    {
      path:'/login',name:'login',
      component:resolve => require(['../page/login.vue'],resolve),
    },
    {
      path:'/player',name:'player',
      component:resolve => require(['../page/player.vue'],resolve),
    },
    {
      path:'/search',name:'search',
      component:resolve => require(['../page/search.vue'],resolve),
    }
  ]
})
route.afterEach((from,to)=>{
    // console.log(from.name)
})
export default route;
