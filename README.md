# 一个vuejs DEMO --以后可能完善成一个项目啦

> A Vue.js project

## 使用步骤

``` bash
# 先安装nodejs
# 安装好了后设置淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
#不动的话用这个
alias cnpm="npm --registry=https://registry.npm.taobao.org \

#cd进工程内
# 安装vue-awesome-swiper 轮播控件（我用的这个）
cnpm install vue-awesome-swiper --save
# 安装工程
cnpm install
# 卡住的话多试几次
# 安装好了后
cnpm run dev
# 即可在localhost:8080 访问
# 目前只体现了组件开发 router路由并没有体现出来
# 该框架不兼容IE9以下浏览器，用vue-router开发对SEO并不友好，使用请慎重！
