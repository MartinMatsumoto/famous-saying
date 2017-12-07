<template>
  <div class="suggested_container">
    <fs-smalltitle :title="title" :englishTitle="englishTitle"></fs-smalltitle>
    <div class="content_container">
      <div class="content">
        <div class="content_one">
          <img src="~@/assets/content/case1.jpg"/>
          <div class="content_one_content content_text">
            <div class="white_arrow"></div>
            <p class="text_margin"><strong>美术工作室</strong></p>
            <p class="text_margin"><strong>Art studio creative</strong></p>
            <p class="small_text">工作室宗旨是成为特立独行的开心人，让绘画带给我们的不仅是独特的视角，更多的是快乐的心境。小众，却充满灵气，保持个性。</p>
          </div>
        </div>
        <div class="content_horizontal">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import smallTitle from './SmallTitle.vue'

  export default {
    name: 'suggested-content',
    data() {
      return {
        title : '我们的创意案例',
        englishTitle : 'OUR CREATIVE CASE',
      }
    },
    components: {
      'fs-smalltitle': smallTitle
    }
  }
</script>

<style>
  .suggested_container {
    height: 660px;
    background-color: white;
  }

  .suggested_container .content_container {
    height: 496px;
    width: 100%;
    background: url("~@/assets/bg/suggested_bg.jpg");
  }

  .suggested_container .content {
    width: 1100px;
    height: 496px;
    margin: 0 auto;
  }

  .suggested_container .content_one {
    width: 482px;
    height: 496px;
  }

  .suggested_container img{
    float: left;
  }

  .suggested_container .content_one_content {
    color: white;
    width: 171px;
    height: 351px;
    float: left;
    background-color: #2ba399;
  }

  .suggested_container .content_text {
    padding: 145px 45px 0 25px;
    font-family: Verdana,Geneva,sans-serif;
    font-size: 16px;
  }

  .suggested_container .content_text p{
    text-align: left;
  }

  .suggested_container .white_arrow{
    width: 25px;
    height: 10px;
    background: url("~@/assets/content/icons.png") no-repeat 0px -37px;
  }

  .suggested_container .small_text {
    font-size: 12px;
    line-height: 200%;
    margin-top: 35px;
  }

  .suggested_container .text_margin {
    margin-top: 15px;
  }

  .suggested_container .content_horizontal_container {

  }
</style>
