<template>
  <div class="header_container">
    <div class="header">
      <div class="img_container"><img :src="logo" class="logo"/></div>
      <ul>
        <li v-for="head in headers"><router-link :to="head.url">{{head.title}}</router-link></li>
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
        headers: [{
          title: "网站首页",
          url: "/"
        }, {
          title: "内容浏览",
          url: "/content/content_list"
        }, {
          title: "关于我们",
          url: "/about_us"
        }],
        logo: logo
      }
    }
  }
</script>

<style>
  .header_container {
    height: 115px;
    width: 100%;
    position: fixed;
    z-index: 999;
    background: url("~@/assets/bg/header_bg.png");
    box-shadow: 1px 1px 10px gray;
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

  .header_container .header a {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    color: black;
    text-decoration: none;
  }

  .header_container .header a:hover {
    color: #2ba399;
  }
</style>
