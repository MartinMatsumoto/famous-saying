<template>
  <div class="footer_container">
    <div class="footer"></div>
  </div>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style>
  .footer_container {
    width: 100%;
    height: 179px;
    background-color: #212121;
  }

  .footer{
    width: 1100px;
    margin: 0 auto;
  }
</style>
