<template>
  <el-container
    direction="vertical"
    class="bg-gray">
    <el-container direction="vertical" v-for="(order, index) in ordersLists" :key="index" class="bg-white mt20 mb20" v-if="ordersLists && ordersLists.length">
      <el-row type="flex" justify="start" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
        <el-col :span="24">
          <el-steps :active="order.status.status - 1" align-center>
            <el-step title="下单"></el-step>
            <el-step title="支付成功"></el-step>
            <el-step title="已发货"></el-step>
            <el-step title="订单成功"></el-step>
          </el-steps>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
        <el-col :span="6">订单号</el-col>
        <el-col :span="18" class="text-right">
          {{order.orderId}}
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
        <el-col :span="12">
          商品总金额：
        </el-col>
        <el-col :span="12" class="text-right">
          {{order.price}}
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10">
        <el-col :span="12">
          下单时间：
        </el-col>
        <el-col :span="12" class="text-right">
          {{order.createTime}}
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10">
        <el-col :span="12">
          支付状态：
        </el-col>
        <el-col :span="12" class="text-right">
          {{order.status.text}}
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
        <el-col :span="12">
          支付方式：
        </el-col>
        <el-col :span="12" class="text-right">
          {{order.payType}}
        </el-col>
      </el-row>
      <el-row v-if="order.status.button" type="flex" justify="space-between" align="middle" class="pt20 pb20 border-bottom">
        <el-col :span="24">
          <el-button type="primary" class="width-100 pt20 pb20" @click="handlepay(order)">{{order.status.button}}</el-button>
        </el-col>
      </el-row>
    </el-container>
    <el-alert title="您的账户暂时没有订单。" type="info" :closable="false" class="mb20" v-else />
    <el-button type="text" class="mb20" v-show="limit >= 10" @click="generateOrdersListsAction(limit)"><span class="h2">点击加载更多</span></el-button>
  </el-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orders')
export default {
  name: 'OrdersLists',
  computed: {
    ...mapState(['ordersLists', 'limit'])
  },
  methods: {
    ...mapActions(['generateOrdersListsAction', 'handleOrdersBcPay']),
    handlepay (instance) {
      console.log(instance)
      let { price, sign, orderId } = instance
      let data = {
        sign,
        orderId,
        title: '阿布跑跑智慧鞋垫',
        amount: String(Number(price.substr(1)) * 100)
      }
      this.$router.push({ name: 'payMobile', params: { sign: sign, instance: data } })
    }
  },
  activated () {
    console.log('mobile ordersLists activated ')
    this.generateOrdersListsAction()
  }
}
</script>
