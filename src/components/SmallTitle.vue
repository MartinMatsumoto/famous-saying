<template>
  <div class="small_title">
    <p><strong class="title">{{title}}</strong></p>
    <div class="line"></div>
    <p><strong class="english_title">{{englishTitle}}</strong></p>
  </div>
</template>

<script>
  export default {
    name: 'small-title',
    props : ['title','englishTitle'],
    data() {
      return {
      }
    }
  }
</script>

<style>
  .small_title {
    padding: 50px 0 50px 0;
  }

  .small_title .line {
    height: 1px;
    width: 247px;
    background-color: #2C9B90;
    margin: 0 auto;
  }

  .small_title .title {
    font-size: 20px;
  }

  .small_title .english_title {
    font-size: 16px;
    font-family: Verdana, Geneva, sans-serif;
  }

  .small_title p {
    color: black;
    line-height: 40px;
    letter-spacing: 2px;
  }
</style>
