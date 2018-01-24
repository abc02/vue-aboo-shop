<style lang="scss">
  .help-container {
    .row {
      margin-top: 50px;
      margin-bottom: 30px;
      h1 {
        padding-left: 60px;
        margin-bottom: 25px;
      }
      p {
        padding-left: 60px;
        color: rgba($color: #000000, $alpha: .7);
      }
      ul {
        margin-top: 8px;
        padding-left: 90px;
        li {
          list-style: decimal !important;
          color: rgba($color: #000000, $alpha: .7);
          margin-bottom: 8px;
        }
      }
    }
    .prod-package {
      background-color: white;
      padding-top: 15px;
      padding-bottom: 30px;
      .prod-img {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .package-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          width: 120px;
          .package-text {
            position: relative;
            margin-left: -16px;
            color: rgba($color: #000000, $alpha: .7);
            &:after {
              content: 'X1';
              display: block;
              position: absolute;
              right: 8px;
              bottom: 0;
            }
          }
          img {
            width: 120px;
            height: auto;
            margin-bottom: 16px;
          } // &.changer img {
          //     width: 82px;
          // }
        }
      }
    }
    .dveice-use {}
    .app-use {
      .app-img {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 216px;
        }
      }
    }
  }
  li{
    list-style: none !important;
  }
</style>

<template>
    <el-row class="el-row help-container">
      <div class="prod-package row">
        <h1>包装及内容</h1>
        <div class="prod-img">
          <div class="package-item shoe-pad">
            <img src="../assets/prod-01.png" alt="xiedian" />
            <span class="package-text">智能鞋垫</span>
          </div>
          <div class="package-item changer">
            <img src="../assets/prod-02.png" alt="changer" />
            <span class="package-text">无线充电</span>
          </div>
          <div class="package-item help-book">
            <img src="../assets/prod-03.png" alt="help" />
            <span class="package-text">说明书</span>
          </div>
        </div>
      </div>
      <div class="device-use row">
        <h1>鞋垫充电与关机、开机</h1>
        <p>
          A 充电
          <ul>
            <li>用户打开鞋垫包装后，将鞋垫放在无线充电器上即可进行充电。</li>
            <li>红灯常亮后表示正在充电，当电量充满时绿灯将会亮起。</li>
          </ul>
        </p>
        <p>
          B 关机、开机
          <ul>
            <li>用户打开包装时鞋垫默认开机状态中。</li>
            <li>电池耗尽，放在无线充电器上当电量达到10%时鞋垫将自动开机。</li>
          </ul>
        </p>
      </div>
      <div class="app-use row">
        <h1>阿布跑跑APP使用教程</h1>
        <div class="app-img">
          <img src="../assets/help-01.png" alt="" />
          <img src="../assets/help-02.png" alt="" />
          <img src="../assets/help-03.png" alt="" />
        </div>
      </div>
      <div class="upkeep row">
        <h1>维护与保养建议</h1>
        <ul>
          <li>非专业人士不可自行拆开鞋垫，当鞋垫出现故障时请拨打售后服务热线电话或与当地经销商联系。</li>
          <li>请勿使用化学溶剂或清洁剂清洗本产品。</li>
          <li>请避免淋水、浸水、摔落、敲打、扭曲，防止鞋垫爆裂，损坏内部器件。</li>
          <li>请保持电量处于饱满状态，长时间不用，电池会自行放电，不使用请将电池充电后放置在干燥清凉避光的地方。</li>
          <li>请将产品远离火源，高温高热等极端环境。</li>
          <li>本鞋垫在断电状态和服务区以外时，定位功能是无法工作的。</li>
        </ul>
      </div>
    </el-row>
</template>

<script>
export default {
  name: 'XXX'
}

</script>
