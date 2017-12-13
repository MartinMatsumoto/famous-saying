<template>
  <div id="app">
    <fs-header></fs-header>
    <router-view/>
    <fs-footer></fs-footer>
  </div>
</template>

<script>
  import header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      'fs-header': header,
      'fs-footer' : Footer,
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

  .clear_both {
    clear: both;
  }

  .global_color {
    color: #2ba399;
  }
</style>
