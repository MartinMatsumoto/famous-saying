<template>
  <div class="fs_content_detail">
    <p class="title">{{title}}</p>
    <div class="source">
      <span>来源：{{source}}</span>
      <span>作者：{{author}}</span>
      <span>发布时间：{{publishTime}}</span>
    </div>
    <p class="subtitle">{{subtitle}}</p>
    <div class="main_content">
      <p v-for="(content,index) in contents">{{content.content}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        source: "这个是来源",
        author: "这个是作者",
        publishTime: "2017-05-01",
        title: "如何用铝合金灯光架搭建背景墙",
        subtitle: "搭建一个龙门架所需物料：两段铝合金立柱、一端铝合金横梁、两个方套、两个横担、两个吊挂葫芦、两个反头、两个底座、八个斜支撑、吊带、螺丝等。",
        contents: []
      }
    },
    created: function () {
      for(var i=0;i<20;i++){
          this.contents.push({
            content : "12月12日，郑志田的班主任王新告诉澎湃新闻（www.thepaper.cn），郑志田在校学习成绩优异，是一名留守少年，12月7日下午发烧请假回家。王新说，以郑志田在校的平常表现，对他冷静救人的事不惊讶。对于上述救人举动，郑志田向澎湃新闻表示，他学习过安全防溺水教育，当时救人时，没有考虑太多，“如果我不去救溺水的孩子，我会后悔一辈子。”"
          })
      }
    }
  }
</script>

<style>
  .fs_content_detail {
    width: 1100px;
    min-height: 100px;
    margin: 0 auto;
  }

  .fs_content_detail .title {
    font-size: 20px;
    color: black;
  }

  .fs_content_detail .source {
    margin-top: 20px;
    font-size: 12px;
    color: #999999;
  }

  .fs_content_detail .source span {
    margin-right: 30px;
  }

  .fs_content_detail .subtitle {
    margin: 30px 0 30px 0;
    font-size: 12px;
    color: #868686;
    line-height: 25px;
    background: #F5F5F5;
    border: 1px solid #E5E5E5;
  }

  .fs_content_detail .main_content {

  }

  .fs_content_detail .main_content p {
    text-align: left;
    text-indent:2em;
    padding: 10px 30px 10px 30px;
  }
</style>
