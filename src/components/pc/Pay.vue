<template>
<el-row type="flex" justify="center" align="middle">
    <el-col :span="20">
      <el-container direction="vertical" class="mt20" v-if="isPay" >
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
         <el-collapse>
         <el-collapse-item title="订单详情">
            <el-row type="flex" justify="start" align="top" :gutter="20" class="pb10">
              <el-col :span="8" class="h3 gray text-right">订单号:</el-col>
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
                    {{order.goodsName}}{{order.specName}}{{order.number}}
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
        <el-row type="flex" justify="start" align="middle" class="pt20 pb20 mt20">
          <el-col :span="24" class="h3">
            支付方式
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" class="pt10 pb10" >
          <el-col :span="4" class="border text-center pointer" style="height: 80px;">
            <el-row type="flex" justify="center" align="middle" @click.native="handleBcPay(instance, 'ali')" class="height-100">
              <img :src="alipay" alt="alipay" style="width: 40px; height:40px;" class="mr20"><span class="h1 gray bold">支付宝</span>
            </el-row>
          </el-col>
        </el-row>
      </el-container>
      <el-container direction="vertical" class="border-bottom pt20 pb20 bg-white" v-else>
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
      wxpay
    }
  },
  created () {
    if (this.instance) {
      this.generateOrdersDetailAction(this.instance.orderId)
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions(['generateOrdersDetailAction', 'handleOrdersBcPay']),
    handleBcPay (instance, type) {
      instance['instantChannel'] = type
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
