<template>
  <div class="about_us">
    <item-banner></item-banner>
    <div class="about_us_content">
      <small-title-right :title="title" :englishTitle="englishTitle"></small-title-right>
      <div class="content">
        <baidu-map class="bm-view" ak="Ndcgn2ltp8kXkG2Ip599tREPa3lNrhic" :center="center" :zoom="zoom" @ready="handler">
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
  import itemBanner from './ItemBanner.vue'
  import smallTitleRight from './SmallTitleRight.vue'
  import {BaiduMap} from 'vue-baidu-map'

  export default {
    name: 'about_us',
    data() {
      return {
        title : '关于我们',
        englishTitle : 'ABOUT US',
        center: {lng: 104.0772390000, lat: 30.5551800000},
        zoom: 15
      }
    },
    methods: {
      handler ({BMap, map}) {
        this.center.lng = 104.0772390000
        this.center.lat = 30.5551800000
        this.zoom = 15

        var point = new BMap.Point(104.0772390000,30.5551800000);  // 创建点坐标
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        // 启用滚轮放大缩小
        map.enableScrollWheelZoom();
        var marker = new BMap.Marker(point);  // 创建标注
        var opts = {
          width : 100,     // 信息窗口宽度
          height: 70,     // 信息窗口高度
          enableMessage:true,//设置允许信息窗发送短息
        }
        var infoWindow = new BMap.InfoWindow("地址：成都天府软件园A区15层", opts);  // 创建信息窗口对象
        marker.addEventListener("click", function(){
          map.openInfoWindow(infoWindow,point); //开启信息窗口
        });
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      }
    },
    components : {
      itemBanner,
      smallTitleRight,
      BaiduMap
    }
  }
</script>

<style>
  .about_us {
    padding-top: 120px;
  }

  .about_us .about_us_content{
    width: 1100px;
    margin: 0 auto;
  }

  .about_us .about_us_content .content{
    width: 1100px;
    margin: 0 auto;
    height: 508px;
    border: 1px solid #ECECEC ;
    padding: 40px 60px 40px 60px;
  }

  .about_us .map{
    width: 200px;
    height: 200px;
  }

  .bm-view {
    width: 600px;
    height: 520px;
  }
</style>
