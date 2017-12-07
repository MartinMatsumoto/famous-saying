<template>
  <div class="banner_container">
    <banner-tip></banner-tip>
    <swiper :options="swiperOption">
      <swiper-slide v-for="banner in banners"><img :src="banner"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
  </div>
</template>

<script>
  import BannerTip from '../components/BannerTip.vue'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import banner1 from '../assets/banner/banner1.jpg'
  import banner2 from '../assets/banner/banner2.jpg'
  import banner3 from '../assets/banner/banner3.jpg'

  export default {
    name: 'app',
    data() {
      return {
        banners: [banner1, banner2, banner3],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay: 50000,
            disableOnInteraction: true
          },
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          /*navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },*/
          scrollbar: '.swiper-scrollbar',
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper) {
            console.log(swiper)
          },
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    mounted() {
    },
    components: {
      swiper,
      swiperSlide,
      BannerTip
    }
  }
</script>

<style>
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background: #2ba399;
  }

  .banner_container {
    padding-top: 120px;
    height: 1080px;
  }
</style>
