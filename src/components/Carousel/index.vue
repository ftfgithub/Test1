<template>
  <div class="swiper-container" id="floor1Swiper" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carsousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      //  立即监听：不管你有没有变化上来就监听你
      // 为什么监听不到，数据是父亲给的，没有变化
      handler() {
        //  只能数据已经有了，但是v-for动态渲染的结构还是没有办法
        this.$nextTick(() => {
          // 当你执行这个回调，保证服务器的数据已经回来了 v-for执行完毕【轮播图结构一定有了】
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              // 点击小球也能切换
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>