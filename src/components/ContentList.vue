<template>
  <div class="content_list">
    <div class="content" v-for="(content,index) in contents">
      <div class="big_text">首</div>
      <div class="text_right">
        <p class="title">{{content.title}}</p>
        <p class="small_text">
          {{content.content}}
        </p>
      </div>
      <div class="clear_both"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content-list',
    data() {
      return {
        contents: []
      }
    },
    created: function () {
      for (var i = 0; i < 20; i++) {
        this.contents.push({
          title: "如何用铝合金灯光架搭建背景墙" + i,
          content: i + "搭建一个龙门架所需物料：两段铝合金立柱、一端铝合金横梁、两个方套、两个横担、两个吊挂葫芦、两个反头、两个底座、八个斜支撑、吊带、螺丝等。搭建一个龙门架所需物料：两段铝合金立柱、一端铝合金横梁、两个方套、两个横担、两个吊挂葫芦、两个反头、两个底座、八个斜支撑、吊带、螺丝等。搭建一个龙门架所需物料：两段铝合金立柱、一端铝合金横梁、两个方套、两个横担、两个吊挂葫芦、两个反头、两个底座、八个斜支撑、吊带、螺丝等。搭建一个龙门架所需物料：两段铝合金立柱、一端铝合金横梁、两个方套、两个横担、两个吊挂葫芦、两个反头、两个底座、八个斜支撑、吊带、螺丝等。"
        });
      }
    }
  }
</script>

<style>
  .content_list {
    width: 1100px;
    margin: 0 auto;
  }

  .content_list .content {
    width: 1050px;
    min-height: 65px;
    padding: 10px 20px 10px 30px;
    border-bottom: 1px dotted #dbd4cd;
    cursor: pointer;
  }

  .content_list .content:hover .text_right .title {
    color: #2ba399;
  }

  .content_list .content .big_text {
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-weight: bold;
    color: white;
    font-size: 35px;
    background-color: #2ba399;
    float: left;
  }

  .content_list .content .text_right {
    float: left;
    margin-left: 10px;
    max-width: 980px;
  }

  .content_list .content .text_right .title {
    color: black;
    text-align: left;
    font-size: 20px;
  }

  .content_list .content .text_right .small_text {
    font-size: 12px;
    color: #999999;
    text-align: left;
    line-height: 140%;
  }
</style>
