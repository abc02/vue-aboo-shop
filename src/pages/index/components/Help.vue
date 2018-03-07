<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle" class="mt20 mb20">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          <h1>包装及内容</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="text-center mb20">
        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
          <img :src="prod01" style="width: 120px"/>
        </el-col>
        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
          <img :src="prod02" style="width: 120px"/>
        </el-col>
          <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
          <img :src="prod03" style="width: 120px"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="text-center mb20">
        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
          <span class="package-text">智能鞋垫</span>
        </el-col>
        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
            <span class="package-text">无线充电</span>
        </el-col>
        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
          <span class="package-text">说明书</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          <h1>鞋垫充电与关机、开机</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            A 充电
            <ul class="ml20 mt20 mb20">
              <li class="mb20">用户打开鞋垫包装后，将鞋垫放在无线充电器上即可进行充电。</li>
              <li>红灯常亮后表示正在充电，当电量充满时绿灯将会亮起。</li>
            </ul>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          B 关机、开机
          <ul class="ml20 mt20 mb20">
            <li class="mb20">用户打开包装时鞋垫默认开机状态中。</li>
            <li>电池耗尽，放在无线充电器上当电量达到10%时鞋垫将自动开机。</li>
          </ul>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <h1>阿布跑跑APP使用教程</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="text-center mb20">
        <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
          <img :src="help01" style="width: 216px;"/>
        </el-col>
        <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
          <img :src="help02" style="width: 216px;" />
        </el-col>
        <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
          <img :src="help03" style="width: 216px;" />
        </el-col>
      </el-row>
        <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <h1>维护与保养建议</h1>
            <ul class="ml20 mt20 mb20">
            <li class="mb20">非专业人士不可自行拆开鞋垫，当鞋垫出现故障时请拨打售后服务热线电话或与当地经销商联系。</li>
            <li class="mb20">请勿使用化学溶剂或清洁剂清洗本产品。</li>
            <li class="mb20">请避免淋水、浸水、摔落、敲打、扭曲，防止鞋垫爆裂，损坏内部器件。</li>
            <li class="mb20">请保持电量处于饱满状态，长时间不用，电池会自行放电，不使用请将电池充电后放置在干燥清凉避光的地方。</li>
            <li class="mb20">请将产品远离火源，高温高热等极端环境。</li>
            <li>本鞋垫在断电状态和服务区以外时，定位功能是无法工作的。</li>
          </ul>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import prod01 from 'assets/prod-01.png'
import prod02 from 'assets/prod-02.png'
import prod03 from 'assets/prod-03.png'
import help01 from 'assets/help-01.png'
import help02 from 'assets/help-02.png'
import help03 from 'assets/help-03.png'
export default {
  name: 'Help',
  data () {
    return {
      prod01,
      prod02,
      prod03,
      help01,
      help02,
      help03
    }
  }
}
</script>
