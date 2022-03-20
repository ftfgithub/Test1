// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

/* 
component: () => import('@/pages/Search')
1. import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
2. 组件配置的是一个函数, 函数中通过import动态加载模块并返回, 
    初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js
作用: 用于提高首屏的加载速度
*/
// 路由配置信息

    export default [
    {
        path: '/center',
        component: Center,
        // 子路由|二级路由组件
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        beforeEnter:(to,from,next)=>{
            if (from.path == '/pay'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        beforeEnter:(to,from,next)=>{
            // 去支付页面必须从交易页面来
            if(from.path=='/trade'){
                next()
            }else{
                // 其他的停留当前页，
                next(false)
            }
        }
    },
    {
        path: '/trade',
        component: Trade,
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面必须从购物车来
            if(from.path=='/shopcart'){
                next()
            }else{
                // 其他的停留当前页，
                next(false)
            }
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        name:'detail'
    },
    {
        path: '/home',
        component: Home,
        meta: { isShow: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: { isShow: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { isShow: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { isShow: false }

    },
    // 重定向，在项目跑起来的时候，当你访问/时候里面让他定向到首页
    {
        path: '*',
        redirect: '/Home'
    }
]