<template>
  <div class="fs_title_container">
    <fs-smalltitle :title="title" :englishTitle="englishTitle"></fs-smalltitle>
    <div class="content_container">
      <div v-for="(content,index) in contents" :class="[{ margin_right: index != contents.length - 1 }, {content}]">
        <img class="head_img" :src="content.img" />
        <img class="head_img_bg" :src="content_hover" />
        <div class="content_text_container">
          <div class="content_title">{{content.title}}</div>
          <div class="content_content">{{content.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import contentHover from '../assets/bg/content_hover.png';
  import smallTitle from './SmallTitle.vue'

  export default {
    name: 'fs-titles',
    data() {
      return {
        contents: [],
        content_hover : contentHover,
        title : '我们的服务项目',
        englishTitle : 'OUR SERVICE ITEMS',
      }
    },
    components : {
      'fs-smalltitle' : smallTitle
    },
    created: function () {
      for (var i = 1; i <= 3; i++) {
        this.contents.push({
          title: "平面广告设计",
          content: "以市场为导向，观察受众人群的行为，揭示潜在需求，以全新的方式提供服务。帮助企业打造创新文化，培养创新能力，从而提升品牌附加值。",
          img: "/src/assets/content/title_img" + i + ".jpg"
        });
      }
    }
  }
</script>

<style>
  .fs_title_container {
    height: 763px;
    background-color: #E8E8E8;
  }

  .fs_title_container .content_container {
    width: 1100px;
    margin: 0 auto;
  }

  .fs_title_container .content {
    width: 345px;
    height: 551px;
    background-color: white;
    float: left;
    cursor: pointer;
  }

  .fs_title_container .content:hover .head_img_bg {
    display: block;
  }

  .fs_title_container .margin_right {
    margin-right: 32px;
  }

  .fs_title_container .content .head_img {
    width: 345px;
    height: 345px;
  }

  .fs_title_container .content_title {
    float: left;
    font-size: 18px;
    color: #5D5D5D;
  }

  .fs_title_container .head_img_bg {
    width: 345px;
    height: 345px;
    position: absolute;
    margin: -350px 0 0 0px;
    display: none;
  }

  .fs_title_container .content_content {
    float: left;
    font-size: 14px;
    color: #909090;
    text-align: left;
    margin-top: 15px;
    line-height: 200%;
    font-family: 微软雅黑;
  }

  .fs_title_container .content_text_container {
    padding: 20px;
  }
</style>
