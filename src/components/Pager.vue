<template>
  <div class="pager">
    <div class="item item_disable">&lt;</div>
    <div class="item item_choose">1</div>
    <div class="item item_enable">1</div>
    <div class="item item_enable">1</div>
    <div class="item item_enable">1</div>
    <div class="item item_enable">1</div>
    <div class="item item_enable">&gt;</div>
  </div>
</template>

<script>
    export default {
        name: 'pager',
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style>
  .pager {
    width: 1100px;
    height: 20px;
    padding: 10px 0 10px 0;
    margin: 0 auto;
  }

  .pager .item {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    float: left;
    margin-right: 5px;
    text-align: center;
    color: black;
    cursor: pointer;
    font-size: 12px;
    line-height: 20px;
  }

  .pager .item_enable:hover {
    color: white;
    background-color: black;
  }

  .pager .item_choose {
    color: white;
    background-color: black;
  }

  .pager .item_disable {
    color: #EEEEEE;
    border: 1px solid #EEEEEE;
    background-color: white;
  }
</style>
