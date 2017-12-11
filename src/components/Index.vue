<template>
  <div>
    <fs-banner></fs-banner>
    <fs-titles></fs-titles>
    <suggested-content></suggested-content>
    <suggested-type></suggested-type>
  </div>
</template>

<script>
  import banner from './Banner.vue'
  import FamousSayingTitles from './FamousSayingTitles.vue'
  import SuggestedContent from './SuggestedContent.vue'
  import SuggestedType from './SuggestedType.vue'
  export default {
    name: 'fs-index',
    data() {
      return {
        msg: ''
      }
    },
    components: {
      SuggestedContent,
      SuggestedType,
      FamousSayingTitles,
      'fs-banner': banner,
      'fs-titles': FamousSayingTitles
    }
  }
</script>

<style>
</style>
