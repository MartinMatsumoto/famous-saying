<template>
  <div class="famous_content">
    <item-banner></item-banner>
    <small-title-right :title="title" :englishTitle="englishTitle"></small-title-right>
    <content-header></content-header>
    <content-list></content-list>
    <pager></pager>
  </div>
</template>

<script>
  import itemBanner from './ItemBanner.vue'
  import smallTitleRight from './SmallTitleRight.vue'
  import ContentHeader from './ContentHeader.vue'
  import ContentList from './ContentList.vue'
  import Pager from './Pager'

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
      ContentList,
      Pager
    }
  }
</script>

<style>
  .famous_content {
    padding-top: 120px;
    padding-bottom: 50px;
  }
</style>
