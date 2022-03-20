<template>
 
 <div> 
<Header/>
<!-- 路由组件出口 -->
<router-view></router-view>
<!-- 在home/search显示，在登录和注册隐藏 -->
     <Footer/>
 </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
     name:'',
components:{
    Header,
    Footer
},
mounted() {
    // 派发一个action||获取商品分类的三级列表数据
    // 通知vuex发请求，获取数据，存储于仓库之中
    this.$store.dispatch("categoryList");
},
}
</script>

<style>

</style>