<template>
  <div class="header_container">
    <div class="header">
      <div class="img_container"><img :src="logo" class="logo"/></div>
      <ul>
        <li>网站首页</li>
        <li>网站首页</li>
        <li>网站首页</li>
        <li>网站首页</li>
        <li>网站首页</li>
        <li>联系我们</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import logo from '../assets/logo.png'

  export default {
    name: 'header',
    data() {
      return {
        msg: 'hello world',
        logo: logo
      }
    }
  }
</script>

<style>
  .header_container {
    height: 120px;
    width: 100%;
    position: fixed;
    z-index: 999;
    background-color: white;
  }

  .header_container .logo {
    float: left;
    height: 80px;
  }

  .header_container .img_container {
    padding-top: 20px;
    display: block;
    float: left;
  }

  .header_container .header {
    width: 1100px;
    height: 120px;
    margin: 0 auto;
  }

  .header_container .header ul {
    padding-top: 60px;
    display: block;
    float: left;
    margin-left: 120px;
  }

  .header_container .header li {
    float: left;
    width: 100px;
    height: 50px;
    line-height: 50px;
    margin: 0 5px 0 5px;
    cursor: pointer;
    text-align: center;
  }

  .header_container .header li:hover {
    color: #2ba399;
  }
</style>
