<template>
  <div class="sugg_type_container">
    <fs-smalltitle :title="title" :englishTitle="englishTitle"></fs-smalltitle>
    <div class="sugg_type_content">
      <div :class="[{ margin_right: index != contents.length - 1 }, {content}]" v-for="(content,index) in contents">
        <img src="~@/assets/content/tu1.jpg"/>
        <div class="content_mask"></div>
        <div class="text">
          <div class="text_left">
            <div class="title"><strong>{{content.title}}</strong></div>
            <div class="year"><strong>{{content.year}}</strong></div>
            <div class="year date">{{content.date}}</div>
          </div>
          <div class="middle_line"></div>
          <div class="text_right">
            <p class="right_text">{{content.content}}</p>
          </div>
        </div>
      </div>
      <div class="clear_both"></div>
    </div>
  </div>
</template>

<script>
  import smallTitle from './SmallTitle.vue'
  export default {
    name: 'suggested-type',
    data() {
      return {
        contents: [],
        title : '新闻动态',
        englishTitle : 'NEWS INFORMATION',
      }
    },
    components: {
      'fs-smalltitle': smallTitle
    },
    created : function () {
      for (var i = 1; i <= 4; i++) {
        this.contents.push({
          title: "公司新闻",
          content: "当下，网络广告已经成为最热门的广告形式，行业数据显示，广告主品牌非行销部分预算中，互联网广告预算已经上升到所有媒体的第二名，占14%。传统媒体 中，电视以60%.....",
          year : '2017',
          date : '9/13',
          img: ""
        });
      }
    }
  }
</script>

<style>
  .sugg_type_container {
    min-height: 580px;
    width: 100%;
  }

  .sugg_type_content {
    width: 960px;
    padding: 0 70px 35px 70px;
    margin: 0 auto;
  }

  .sugg_type_content .content{
    width: 456px;
    height: 300px;
    margin-bottom: 45px;
    float: left;
    cursor: pointer;
  }

  .sugg_type_content .content .content_mask {
    width: 456px;
    height: 220px;
    background: url("~@/assets/bg/content_hover.png");
    position: absolute;
    margin-top: -225px;
    display: none;
  }

  .sugg_type_content .content:hover .content_mask{
    display: block;
  }

  .sugg_type_content .margin_right{
    margin-right: 24px;
  }

  .sugg_type_content .content .text{
    height: 67px;
    width: 456px;
    margin-top: 10px;
  }

  .sugg_type_content .content .text_left{
    width: 64px;
    height: 75px;
    float: left;
  }

  .sugg_type_content .content .middle_line {
    height: 100%;
    width: 1px;
    background-color: #999999;
    float: left;
    margin: 0 13px 0 13px;
  }

  .sugg_type_content .content .text_right{
    width: 365px;
    height: 75px;
    float: left;
  }

  .sugg_type_content .content .text_right .right_text{
    text-align: left;
    font-size: 13px;
    color: #999999;
    line-height: 140%;
  }

  .sugg_type_content .content .text_left .title{
    color: #2ba399;
    font-size: 16px;
    text-align: left;
  }

  .sugg_type_content .content .text_left .year{
    color: #999999;
    font-size: 20px;
    letter-spacing: 2px;
    font-family: Verdana,Geneva,sans-serif;
    text-align: left;
  }

  .sugg_type_content .content .text_left .date{
    font-size: 14px;
  }
</style>
