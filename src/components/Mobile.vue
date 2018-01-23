<style lang="scss">
  [v-cloak] {
    display: none;
  }
  .title-container {
    width: 100%;
    width: 100vw;
    text-align: center;
    .title {
      color: #f6655e;
      font-weight: normal;
      text-align: center;
    }
    .title-white {
      @extend .title;
      color: white !important;
      width: 80%;
      width: 80vw;
      margin: 0 auto;
    }
  }
  .sub {
    margin-top: 6%;
    margin-top: 3vh;
  }
  .row {
    margin: 0 auto;
    width: 100%;
    width: 100vw;
    height: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10%;
    margin-top: 10vh;
    &:first-child {
      margin-top: 0;
    }
  }
  .row-1 {
    background-color: #f6655e;
    justify-content: center;
  }
  .row-2,
  .row-3 {
    justify-content: space-around;
    align-items: center;
  }
  .row-4 {
    /* padding: 0 20px; */
    background-color: #f6655e;
    justify-content: space-around;
    color: white;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 205px;
      height: 256px;
      display: block;
    }
  }
  .download-button {
    margin-top: 20px;
    width: 160px;
    display: block;
  }
  .row {
    padding-bottom: 1px;
    .preview-container {
      margin-top: 6%;
      margin-top: 3vh;
      width: 290px;
      height: 485px;
      position: relative;
      .icon {
        position: absolute;
        transform: translateY(-50%);
      }
    }
  }
  .row-2 .icon {
    width: 290px;
    top: 38%;
  }
  .row-3 .icon {
    width: 230px;
  }
  .row-3 .icon-security {
    width: 130px;
    bottom: 0;
  }
  .row-3 .icon-left {
    top: 28%;
    left: -8%;
  }
  .row-3 .icon-right {
    top: 48%;
    right: -8%;
  }
  .preview {
    display: block;
    width: 290px;
    height: 485px;
  }
  .row-4 .text {
    text-align: left;
    margin: 0 18px;
  }
  p {
    line-height: 1.3;
  }
  .arrow-container {
    height: 35px;
    width: 100%;
    position: absolute;
    bottom: 6vh;
    .arrow {
      position: absolute;
      left: 50%;
      margin-left: -40px;
      height: 35px;
      width: 80px;
    }
  }
  .qrcode-container {
    width: 160px;
    height: 160px;
  }
</style>

<template>
  <div id="app" v-cloak>
    <div class="row row-1">
      <div class="logo-container">
        <img class="logo" src="../assets/logo.png" alt="">
        <a class="download-button" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.gcs.mcj.insole">
          <img class="download-image" src="../assets/download.png" alt="">
        </a>
      </div>
      <div class="arrow-container">
        <div class="arrow">
          <img class="arrow-image animated infinite bounce" src="../assets/arrow.png" alt="222">
        </div>
      </div>
    </div>
    <div class="row row-2">
      <div class="title-container">
        <h1 class="title">精准定位</h1>
        <p class="sub">室内室外各种环境自动切换定位模式</p>
        <p class="sub">手机APP实时查看最新定位信息，孩子去哪，轻松知晓</p>
      </div>
      <div class="preview-container">
        <div class="icon">
          <img src="../assets/info.png">
        </div>
        <img class="preview" src="../assets/bg.png">
      </div>
    </div>
    <div class="row row-3">
      <div class="title-container">
        <h1 class="title">安全守护</h1>
        <p class="sub">设置电子围栏，给孩子一个安全活动区域</p>
        <p class="sub" style="font-size: 14px">超出安全区域将发送报警信息至您的手机APP，及时发现孩子去向</p>
      </div>
      <div class="preview-container">
        <div class="icon icon-security">
          <img src="../assets/security.png">
        </div>
        <div class="icon icon-left">
          <img src="../assets/enter.png">
        </div>
        <div class="icon icon-right">
          <img src="../assets/leave.png">
        </div>
        <div class="preview">
          <img src="../assets/bg.png" alt="bg">
        </div>
      </div>
    </div>
    <div class="row row-4">
      <div class="title-container">
        <h1 class="title-white">下载阿布跑跑APP获取阿布跑跑更多功能</h1>
        <p class="sub">1、微信搜索小程序”阿布跑跑“不用下载就能使用</p>
        <p class="sub">2、点击下方二维码下载“阿布跑跑”体验更多功能</p>
      </div>
      <div class="qrcode-container">
        <a class="qrcode-button" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.gcs.mcj.insole">
          <img class="qrcode-image" src="../assets/qrcode.png" alt="">
        </a>
      </div>
      <div class="text">
        <p>阿布跑跑是一款针对儿童与家长设计的软硬件结合的家长端应用程序，家长通过阿布跑跑应用程序与佩戴在孩子鞋底的智能鞋垫连接，实现与阿布跑跑智能鞋垫轻松关联，准确定位孩子所在位置，日常的运动轨迹频率。</p>
        <p>阿布跑跑智能鞋垫，是根据数万家长与孩子的使用需求，潜心研发，推出的一款针对儿童与家长的软硬结合的儿童智能鞋垫。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mobile'
}

</script>
