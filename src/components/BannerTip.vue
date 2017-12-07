<template>
  <div class="tip_container">
    <div class="tip_position" style="">
      <div class="show_tip">
        <div class="main_text">
          <div>格</div>
          <div>言</div>
          <div><strong>·</strong></div>
          <div>警</div>
          <div>句</div>
        </div>
        <div class="border"></div>
        <div class="small_word line_one">我们保持大脑活力的源泉</div>
        <div class="small_word line_two">您想要的这里都有</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'banner-tip',
        data() {
            return {
                msg: 'hello world'
            }
        }
    }
</script>

<style>
  .tip_container {
    width: 100%;
    position: absolute;
    z-index: 99;
  }

  .tip_position {
    width: 1100px;
    height: 350px;
    margin: 0 auto;
  }

  .show_tip {
    margin-top: 1px;
    width: 225px;
    height: 344px;
    background: url('../assets/bg/tip_bg.png')
  }

  .show_tip .main_text{
    float: left;
    width: 85px;
    height: 290px;
    margin: 35px 0 0 27px;
    font-family: 微软雅黑;
    font-size: 40px;
    color: rgb(43, 163, 153);
  }

  .show_tip .border {
    width: 1px;
    height: 190px;
    background-color: #d9d9d9;
    float: left;
    margin-top: 105px;
  }

  .show_tip strong {
    font-weight: bold;
  }

  .show_tip .small_word {
    float: left;
    width: 20px;
    line-height: 16px;
    font-family: 微软雅黑;
    font-size: 12px;
    margin-top: 105px;
  }

  .show_tip .line_one {
    margin-left: 25px;
  }

  .show_tip .line_two {
    margin-left: 16px;
  }
</style>
