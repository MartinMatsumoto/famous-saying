<template>
  <div class="famous_content">
    <item-banner></item-banner>
    <small-title-right :title="title" :englishTitle="englishTitle"></small-title-right>
    <content-header></content-header>
    <router-view/>
  </div>
</template>

<script>
  import itemBanner from './ItemBanner.vue'
  import smallTitleRight from './SmallTitleRight.vue'
  import ContentHeader from './ContentHeader.vue'
  import ContentList from './ContentList.vue'

  export default {
    name: 'app',
    data() {
      return {
        title: '内容浏览',
        englishTitle: 'CONTENT VIEW',
      }
    },
    components: {
      itemBanner,
      smallTitleRight,
      ContentHeader,
      ContentList
    }
  }
</script>

<style>
  .famous_content {
    padding-top: 120px;
    padding-bottom: 50px;
  }
</style>
