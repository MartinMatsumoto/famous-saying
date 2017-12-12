<template>
  <div class="small_title_right">
    <p><strong class="title">{{title}}</strong></p>
    <div class="line"></div>
    <p><strong class="english_title">{{englishTitle}}</strong></p>
  </div>
</template>

<script>
  export default {
    name: 'small-title-right',
    props : ['title','englishTitle'],
    data() {
      return {
      }
    }
  }
</script>

<style>
  .small_title_right {
    text-align: right;
    padding: 50px 0 50px 0;
  }

  .small_title_right .line {
    height: 1px;
    width: 247px;
    background-color: #2C9B90;
    margin-left: 853px;
  }

  .small_title_right .title {
    font-size: 20px;
  }

  .small_title_right .english_title {
    font-size: 16px;
    font-family: Verdana, Geneva, sans-serif;
  }

  .small_title_right p {
    color: black;
    line-height: 40px;
    letter-spacing: 2px;
  }
</style>
