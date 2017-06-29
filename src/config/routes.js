import App from'../App'
export default [{
    path:'/',
    component:App,
    children:[
    {
        path: '',
        redirect: '/index',
    },
    {
        path: '/index', name: 'index',
        component: resolve => require(['../view/index.vue'], resolve),
        meta:{
            pageTitle:'欢乐套牛'
        }
    },
    {
        path: '/rule', name: 'rule',
        component: resolve => require(['../view/rule.vue'], resolve),
        meta:{
            pageTitle:'玩法介绍'
        }
    },
    {
        path: '/recharge/:money', name: 'recharge',
        component: resolve => require(['../view/recharge.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_yxjb/:money', name: 'recharge_yxjb',
        component: resolve => require(['../view/recharge_yxjb.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }

    },
    {
        path: '/recharge_ttwyx/:money', name: 'recharge_ttwyx',
        component: resolve => require(['../view/recharge_ttwyx.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_haiww/:money', name: 'recharge_haiww',
        component: resolve => require(['../view/recharge_haiww.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_hxw/:money', name: 'recharge_hxw',
        component: resolve => require(['../view/recharge_hxw.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_g60/:money', name: 'recharge_g60',
        component: resolve => require(['../view/recharge_g60.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_dayu/:money', name: 'recharge_dayu',
        component: resolve => require(['../view/recharge_dayu.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_tiantuan/:money', name: 'recharge_tiantuan',
        component: resolve => require(['../view/recharge_tiantuan.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_open_url/:money', name: 'recharge_open_url',
        component: resolve => require(['../view/recharge_open_url.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/recharge_open_url1/:money', name: 'recharge_open_url1',
        component: resolve => require(['../view/recharge_open_url1.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/paySucc/:order_num', name: 'paySucc',
        component: resolve => require(['../view/paySucc.vue'], resolve),
        meta:{
            pageTitle:'充值成功'
        }
    },
    {
        path: '/recordList/:sim/:tab', name: 'recordList',
        component: resolve => require(['../view/recordList.vue'], resolve),
        meta:{
            pageTitle:'游戏记录'
        }
    },
    {
        path: '/changeList', name: 'changeList',
        component: resolve => require(['../view/changeList.vue'], resolve),
        meta:{
            pageTitle:'兑换'
        }
    },
    {
        path: '/changeRecord', name: 'changeRecord',
        component: resolve => require(['../view/changeRecord.vue'], resolve),
        meta:{
            pageTitle:'兑换记录'
        }
    },
    {
        path: '/recordInfo/:sim/:type/:data', name: 'recordInfo',
        component: resolve => require(['../view/recordInfo.vue'], resolve),
        meta:{
            pageTitle:'记录详情'
        }
    },
    {
        path: '/protocol', name: 'protocol',
        component: resolve => require(['../view/protocol.vue'], resolve),
        meta:{
            pageTitle:'服务协议'
        }
    },
    {
        path: '/problem', name: 'problem',
        component: resolve => require(['../view/problem.vue'], resolve),
        meta:{
            pageTitle:'遇到问题'
        }
    },
    {
        path: '/userCenter/:sim', name: 'userCenter',
        component: resolve => require(['../view/userCenter.vue'], resolve),
        meta:{
            pageTitle:'个人中心'
        }
    },
    {
        path: '/userInfo', name: 'userInfo',
        component: resolve => require(['../view/userInfo.vue'], resolve),
        meta:{
            pageTitle:'我的账号'
        }
    },
    {
        path: '/modiNick', name: 'modiNick',
        component: resolve => require(['../view/modiNick.vue'], resolve),
        meta:{
            pageTitle:'修改昵称'
        }
    },
    {
        path: '/bindPhone', name: 'bindPhone',
        component: resolve => require(['../view/bindPhone.vue'], resolve),
        meta:{
            pageTitle:'绑定手机'
        }
    },
    {
        path: '/friends', name: 'friends',
        component: resolve => require(['../view/friends.vue'], resolve),
        meta:{
            pageTitle:'我的好友'
        }
    },
    {
        path: '/welfareCenter', name: 'welfareCenter',
        component: resolve => require(['../view/welfareCenter.vue'], resolve),
        meta:{
            pageTitle:'福利中心'
        }
    },
    {
        path: '/contact', name: 'contact',
        component: resolve => require(['../view/contact.vue'], resolve),
        meta:{
            pageTitle:'联系我们'
        }
    },
    {
        path: '/transferPage_tiantuan', name: 'transferPage_tiantuan',
        component: resolve => require(['../view/transferPage_tiantuan.vue'], resolve),
        meta:{
            pageTitle:'天团游戏'
        }
    },
    {
        path: '/change/:type/:data', name: 'change',
        component: resolve => require(['../view/change.vue'], resolve),
        meta:{
            pageTitle:'兑换'
        }
    },
    {
        path: '/shiwu_game', name: 'shiwu_game',
        component: resolve => require(['../view/shiwu_game.vue'], resolve),
        meta:{
            pageTitle:'赢实物套牛'
        }
    },
    {
        path: '/shiwu', name: 'shiwu',
        component: resolve => require(['../view/shiwu.vue'], resolve),
        meta:{
            pageTitle:'充值'
        }
    },
    {
        path: '/doll', name: 'doll',
        component: resolve => require(['../view/doll_0331.vue'], resolve),
        meta:{
            pageTitle:'夹娃娃'
        }
    },
    {
        path: '/doll_test', name: 'doll_test',
        component: resolve => require(['../view/doll_0331.vue'], resolve),
        meta:{
            pageTitle:'夹娃娃'
        }
    },
    {
        path: '/doll_recordList', name: 'doll_recordList',
        component: resolve => require(['../view/doll/doll_recordlist.vue'], resolve),
        meta:{
            pageTitle:'娃娃记录'
        }
    },
    {
        path: '/doll_guide', name: 'doll_guide',
        component: resolve => require(['../view/doll/doll_guide.vue'], resolve),
        meta:{
            pageTitle:'欢迎来到夹娃娃'
        }
    },
    {
        path: '*', name: 'index',
        component: resolve => require(['../view/index.vue'], resolve),
        meta:{
            pageTitle:'欢乐套牛'
        }
    }

]}]