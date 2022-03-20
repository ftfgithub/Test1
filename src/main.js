import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
Vue.config.productionTip = false
// 引入仓库
import store from '@/store'

// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import{MessageBox} from 'element-ui'
// 第一个参数，全局组件的名字，第二个参数，哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
// 注册全局组件
// element-ui还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入MockServer.js----mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'

// 统一接口api文佳佳恋所有请求参数
// 统一引入
import * as API from '@/api'
import dijia from '@/assets/1.gif'
// 引入插件
import VueLazyload from 'vue-lazyload'
// 注册插件
Vue.use(VueLazyload,{
  // 懒加载默认图片
  loading:dijia
})

//引入表单校验插件
import "@/plugins/validate";


new Vue({
  render: h => h(App),
  // 全局事件总线的配置
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由:底下写法是KV一致【router】小写
  // 注册路由信息：当这里书写router时候，组件身上都拥有$router属性
  router,
  // 注册仓库，组件实例的身上会多了一个属性$store属性
  store
}).$mount('#app')
