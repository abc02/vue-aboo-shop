<style lang="scss">
.el-carousel{
  font-size: 0;
}
.el-carousel__item {
  background-color: white;
}
.el-carousel__indicator {
  .el-carousel__button {
    width: 32px;
    height: 6px;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }
  &.is-active {
    .el-carousel__button {
      background-color: #f6655e;
    }
  }
}
.page-01 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  .ab-container {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 521px;
  }
  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    .title {
      animation: dragLeft 0.7s ease-in-out both;
      font-size: 3.8rem;
      .zhihui {
        color: #28bff7;
        font-size: 5.6rem;
      }
    }
    .sub {
      animation: dragLeft 0.7s ease-in-out both;
      margin-top: 3%;
      margin-top: 3vh;
      font-size: 2.6rem;
      color: rgba($color: #000000, $alpha: 0.6);
    }
    .p {
      animation: dragLeft 0.7s ease-in-out both;
      margin-top: 6%;
      margin-top: 6vh;
      font-size: 1.3rem;
      color: rgba($color: #000000, $alpha: 0.6);
      font-weight: 600;
    }
  }
}
.page-02 {
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 6px;
  .container {
    display: flex;
    .col-01 {
      position: relative;
      .ab-container {
        position: absolute;
        bottom: 12px;
        left: -42px;
        width: 158px;
      }
      .preview-container {
        width: 246px;
      }
    }
    .col-02 {
      margin-left: 3%;
      margin-left: 3vw;
      height: 100%;
      .title {
        color: #f6655e;
        font-size: 3.8rem;
        .paopao {
          color: #28bff7;
          font-size: 5.6rem;
          font-style: italic;
        }
      }
      .sub {
        margin-top: 3%;
        margin-top: 3vh;
        font-size: 2.6rem;
        color: rgba($color: #000000, $alpha: 0.6);
      }
      .download-button {
        display: inline-block;
        border: 0.1rem solid rgba($color: #000000, $alpha: 0.6);
        padding: 6px 24px;
        border-radius: 70px;
        margin-top: 6%;
        margin-top: 6vh;
        font-size: 2.3rem;
        color: rgba($color: #000000, $alpha: 0.6);
      }
    }
  }
}
</style>

<template>
  <el-carousel height="70vh">
    <el-carousel-item>
      <el-container class="wraper page-01">
        <div class="container">
          <div class="ab-container">
            <img src="../assets/ab-01.png" alt="">
          </div>
          <div class="title-container animated fadeInLeft">
            <h1 class="title">阿布跑跑<span class="zhihui">智慧</span>鞋垫</h1>
            <p class="sub">让每一步都放心</p>
            <p class="p">三重定位 | 安全守护 | 历史轨迹 | 多人协助</p>
          </div>
        </div>
      </el-container>
    </el-carousel-item>
    <el-carousel-item>
      <el-container class="wraper page-02">
        <div class="container">
          <div class="col-01">
            <div class="ab-container">
              <img src="../assets/ab-02.png" alt="">
            </div>
            <div class="preview-container">
              <img src="../assets/preview-01.png" alt="">
            </div>
          </div>
          <div class="col-02">
            <h1 class="title">阿布<span class="paopao">跑跑</span>
            </h1>
            <p class="sub">儿童智慧鞋垫APP</p>
            <a class="download-button" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.gcs.mcj.insole">立即下载</a>
          </div>
        </div>
      </el-container>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Swiper'
}
</script>
