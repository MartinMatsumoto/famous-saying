<template>
  <div class="item_banner">
    <banner-tip></banner-tip>
    <div class="item_banner_text">
      一切为了销售，否则我们一无是处
    </div>
  </div>
</template>

<script>
  import BannerTip from './BannerTip.vue'
  export default {
    name: 'item-banner',
    data() {
      return {
        msg: ''
      }
    },
    components : {
      BannerTip
    }
  }
</script>

<style>
  .item_banner {
    height: 370px;
    width: 100%;
    overflow: hidden;
    background: url("~@/assets/bg/item_banner.jpg") repeat-x -300px 0;
  }

  .item_banner .item_banner_text {
    font-size: 50px;
    color: white;
    width: 450px;
    margin: 120px auto;
    text-shadow: 3px 3px 3px black;
  }

</style>
