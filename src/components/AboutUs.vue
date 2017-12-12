<template>
  <div class="about_us">
    <item-banner></item-banner>
    <div class="about_us_content">
      <small-title-right :title="title" :englishTitle="englishTitle"></small-title-right>
    </div>
  </div>
</template>

<script>
  import itemBanner from './ItemBanner.vue'
  import smallTitleRight from './SmallTitleRight.vue'
  export default {
    name: 'about_us',
    data() {
      return {
        title : '关于我们',
        englishTitle : 'ABOUT US'
      }
    },
    components : {
      itemBanner,
      smallTitleRight
    }
  }
</script>

<style>
  .about_us {
    padding-top: 120px;
  }

  .about_us .about_us_content{
    width: 1100px;
    margin: 0 auto;
    height: 500px;
    border: 1px solid #ECECEC ;
  }
</style>
