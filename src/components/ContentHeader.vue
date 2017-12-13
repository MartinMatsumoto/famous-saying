<template>
  <div class="content_header">
    <ul>
      <li class="li_hover">公司新闻</li>
      <li>公司新闻</li>
      <li>公司新闻</li>
      <li>公司新闻</li>
      <li>公司新闻</li>
      <li>公司新闻</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'content-header',
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style>
  .content_header {
    width: 1100px;
    margin: 0 auto;
    height: 100px;
  }

  .content_header li{
    display: block;
    width: 160px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    float: left;
    cursor: pointer;
    color: black;
  }

  .content_header li:hover{
    background-color: #2ba399;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }

  .content_header .li_hover{
    background-color: #2ba399;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
</style>
