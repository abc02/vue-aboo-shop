<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="20" class="border-bottom mt20  bg-white">
      <el-container direction="vertical" v-if="isPay" >
        <el-row type="flex" justify="start" align="middle" class="pt20 pb20">
          <el-col :span="2" class="h1 text-center">
            <i class="el-icon-tickets"></i>
          </el-col>
          <el-col :span="16" class="h1">
            <el-row type="flex" justify="start" align="middle">
                <el-col class="h3 pb10">订单已提交，请及时完成付款</el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle">
                <el-col class="h3">订单号: {{instance.orderId}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row type="flex" justify="start" align="middle" class="text-right">
              <el-col>
                <span>应付金额</span>
                <el-button type="text" class="h1"><span class="h1">{{orderADetail.price}}</span></el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-collapse class="mb20">
         <el-collapse-item>
            <template slot="title">
             <el-row type="flex" justify="start" align="top">
                <el-col :span="24" class="h3 gray text-center">订单详情</el-col>
              </el-row>
            </template>
            <el-row type="flex" justify="start" align="top" :gutter="20" class="pb10">
              <el-col :span="8" class="h3 gray text-right">订单号：</el-col>
              <el-col :span="16" class="h3">{{instance.orderId}}</el-col>
            </el-row>
            <el-row type="flex" justify="start" align="top" :gutter="20" class="pb10">
              <el-col :span="8" class="h3 gray text-right">下单时间：</el-col>
              <el-col :span="16" class="h3">{{orderADetail.createTime}}</el-col>
            </el-row>
            <el-row type="flex" justify="start" align="top" :gutter="20" class="pb10">
              <el-col :span="8" class="h3 gray text-right">订单项：</el-col>
              <el-col :span="16" class="h3">
                <el-row type="flex" justify="start" align="top" class="pb10" v-for="(order, index) in orderBList" :key="index">
                  <el-col :span="24">
                    {{order.goodsName}}{{order.specName}} x{{order.number}}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row type="flex" justify="start" align="top" :gutter="20" class="pb10">
              <el-col :span="8" class="h3 gray text-right">收货信息：</el-col>
              <el-col :span="16" class="h3">
                {{orderADetail.address.NickName}} {{orderADetail.address.Phone}} {{orderADetail.address.Province}}
                {{orderADetail.address.City}} {{orderADetail.address.Area}} {{orderADetail.address.Detail}}
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
        <el-row type="flex" justify="start" align="middle" class="pb10 pt10">
          <el-col :span="24" class="h3">在线支付平台</el-col>
        </el-row>
        <el-row type="flex" class="p pb10">
          支付宝单笔限额：快捷支付因银行而异，一般是 10000-50000；余额支付是 50000。如遇限额问题，建议往支付宝充值后再使用余额支付。
          <a type="text" class="bule" href="https://help.alipay.com/lab/help_detail.htm?help_id=419480" target="_blank"> 查看限额详情<i class="el-icon-arrow-right"></i></a>
        </el-row>
        <el-row class="p pb10">
          微信支付单笔限额：因银行而异，一般是 10000-50000。
          <a type="text" class="bule" href="http://kf.qq.com/touch/faq/151210NZzmuY151210ZRj2y2.html" target="_blank"> 查看限额详情<i class="el-icon-arrow-right"></i></a>
        </el-row>
        <el-row type="flex" justify="start" align="middle" class="pt10 pb10 mb20 text-center ">
          <el-col :span="4" class="pointer mr20 " style="height: 80px;" :class="typePay === 'ali' ? 'border-active' : 'border'">
            <el-row type="flex" justify="center" align="middle" class="height-100" @click.native="handleTypePay('ali')">
              <img :src="alipay" alt="alipay" style="width: 40px; height:40px;" class="mr20"><span class="h1">支付宝</span>
            </el-row>
          </el-col>
          <el-col :span="4" class="pointer" style="height: 80px;" :class="typePay === 'wx' ? 'border-active' : 'border'">
            <el-row type="flex" justify="center" align="middle" class="height-100"  @click.native="handleTypePay('wx')">
              <img :src="wxpay" alt="alipay" style="width: 40px; height:40px;" class="mr20"><span class="h1">微信支付</span>
            </el-row>
          </el-col>
        </el-row>
        <el-row type="flex" justify="end" class="mb20">
          <el-col :span="4">
            <el-button type="primary" class="width-100" @click="handleBcPay" >去付款</el-button>
          </el-col>
        </el-row>
      </el-container>
      <el-container direction="vertical" v-else>
        <el-row type="flex" justify="start" align="middle" class="pt20 pb20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h1 text-center">
            <i class="el-icon-loading"></i>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" class="pb20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="p text-center">
            您将前往安全支付页面，请不要关闭浏览器
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" class="pb20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-center">
            <el-button type="primary">正在跳转到支付页面</el-button>
          </el-col>
        </el-row>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import alipay from 'assets/alipay.png'
import wxpay from 'assets/wxpay.png'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orders')
export default {
  name: 'Pay',
  props: ['sign', 'instance'],
  data () {
    return {
      isPay: false,
      alipay,
      wxpay,
      typePay: 'ali'
    }
  },
  activated () {
    if (this.instance) {
      this.generateOrdersDetailAction(this.instance.orderId)
    } else {
      this.$router.push('/')
    }
  },
  deactivated () {
    this.isPay = false
  },
  methods: {
    ...mapActions(['generateOrdersDetailAction', 'handleOrdersBcPay']),
    handleTypePay (type) {
      this.typePay = type
    },
    handleBcPay () {
      let instance = this.instance
      instance['instantChannel'] = this.typePay
      if (this.typePay === 'wx') {
        return window.confirm('暂未开通微信支付')
      }
      this.handleOrdersBcPay(instance)
    }
  },
  computed: {
    ...mapState(['ordersLists', 'orderADetail', 'orderBList'])
  },
  watch: {
    orderADetail: {
      handler () {
        this.isPay = true
      },
      deep: true
    }
  }
}
</script>
