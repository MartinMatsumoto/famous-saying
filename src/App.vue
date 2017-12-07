<template>
  <div id="app">
    <fs-header></fs-header>
    <fs-banner></fs-banner>
    <fs-titles></fs-titles>
    <suggested-content></suggested-content>
  </div>
</template>

<script>
  import header from './components/Header.vue'
  import banner from './components/Banner.vue'
  import FamousSayingTitles from './components/FamousSayingTitles.vue'
  import SuggestedContent from './components/SuggestedContent.vue'

  export default {
    name: 'app',
    components: {
      SuggestedContent,
      FamousSayingTitles,
      'fs-header': header,
      'fs-banner' : banner,
      'fs-titles' : FamousSayingTitles
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    padding: 0;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }

  li{
    display: block;
  }

  p{
    margin: 0;
    padding: 0;
  }

  .display_none {
    display: none;
  }

  .display_block {
    display: block;
  }
</style>
