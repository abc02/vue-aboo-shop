<template>
  <el-row type="flex" justify="center" align="middle" v-loading="isLoading">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-container v-if="isPay" direction="vertical">
        <el-container direction="vertical" class="border-bottom bg-white bg-white pl10 pr10">
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt20 pb20">
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="h1 text-center">
              <i class="el-icon-tickets"></i>
            </el-col>
            <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="h1">
              <el-row type="flex" justify="start" align="middle">
                 <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3 pb10">订单已提交</el-col>
              </el-row>
              <el-row type="flex" justify="start" align="middle">
                 <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3">请及时完成付款</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-container>
        <el-container direction="vertical" class="border-bottom bg-white pl10 pr10 pb20 pt20">
          <el-row type="flex" justify="start" align="middle" class="pb10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="p">订单已提交</el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="h3 text-right">{{instance.orderId}}</el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pb10">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="p">下单时间</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="h3 text-right">{{orderADetail.createTime}}</el-col>
          </el-row>
          <el-row type="flex" justify="start" align="top" >
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="p">订单项</el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="h3">
              <el-row type="flex" justify="start" align="middle" class="pb10" v-for="(order, index) in orderBList" :key="index">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
                  {{order.goodsName}}{{order.specName}}{{order.number}}
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="top">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="p">收货信息</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="h3 text-right">
              <el-row type="flex" justify="start" align="middle" class="pb10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
                  {{orderADetail.address.NickName}}
                </el-col>
              </el-row>
              <el-row type="flex" justify="start" align="middle" class="pb10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
                  {{orderADetail.address.Province}} {{orderADetail.address.City}}
                </el-col>
              </el-row>
              <el-row type="flex" justify="start" align="middle" class="pb10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
                  {{orderADetail.address.Area}}
                </el-col>
              </el-row>
              <el-row type="flex" justify="start" align="middle" class="pb10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
                  {{orderADetail.address.Detail}}
                </el-col>
              </el-row>
            </el-col>
          </el-row>
           <el-row type="flex" justify="start" align="middle" class="pb10">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="p">应付金额</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="h3 text-right">{{orderADetail.price}}</el-col>
          </el-row>
        </el-container>
        <!-- <el-container direction="vertical" class="border-bottom bg-white pl10 pr10 mt20">
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt20 pb20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3">
              支付方式
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleClickBcPay(instance, 'ali')">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="text-center">
              <img :src="alipay" alt="alipay" style="width: 36px">
            </el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="h3">
              支付宝
            </el-col>
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="text-center">
              <i class="el-icon-arrow-right"></i>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pt10 pb10">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="text-center">
              <img :src="wxpay" alt="wxpay" style="width: 36px">
            </el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="h3">
              微信支付
            </el-col>
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="text-center">
              <i class="el-icon-arrow-right"></i>
            </el-col>
          </el-row>
        </el-container> -->
        <el-container direction="vertical" class="bg-white mt20">
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-button type="primary" class="width-100 pt20 pb20" @click="handleClickBcPay(instance)">立即支付订单</el-button>
            </el-col>
          </el-row>
        </el-container>
      </el-container>
      <el-container v-else direction="vertical" class="border-bottom pt20 pb20 bg-white" >
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
import CommonBase from 'mixins/CommonBase'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Pay',
  props: ['instance'],
  mixins: [CommonBase],
  data () {
    return {
      isPay: false,
      alipay,
      wxpay
    }
  },
  created () {
    if (!this.orderADetail && !this.orderBList && this.instance) {
      this.generateOrderDetailAction(this.instance.orderId)
    }
  },
  methods: {
    ...mapActions({
      generateOrdersDetailAction: 'orders/generateOrdersDetailAction'
    })
  },
  computed: {
    ...mapState({
      isLoaing: 'isLoading',
      ordersLists: 'orders/ordersLists',
      orderADetail: 'orders/orderADetail',
      orderBList: 'orders/orderBList'
    })
  },
  watch: {
    ModifyOrderADetail: {
      handler () {
        this.isPay = true
      },
      deep: true
    }
  }
}
</script>
