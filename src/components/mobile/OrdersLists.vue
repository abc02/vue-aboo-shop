<template>
  <div class="bg-gray">
    <!-- <el-container direction="vertical" v-for="(order, index) in ordersLists" :key="index" class="bg-white mt20 mb20" v-if="ordersLists && ordersLists.length">
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
          {{order.price | RMB }}
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10">
        <el-col :span="12">
          下单时间：
        </el-col>
        <el-col :span="12" class="text-right">
          {{order.createTime | timestamp }}
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
    </el-container> -->
    <mu-list v-for="(order, index) in ordersLists" :key="index" class="mb20" v-if="ordersLists">
      <mu-list-item>
        <el-steps :active="order.status - 1" align-center>
          <el-step title="下单"></el-step>
          <el-step title="支付成功"></el-step>
          <el-step title="已发货"></el-step>
          <el-step title="订单成功"></el-step>
        </el-steps>
      </mu-list-item> 
      <mu-divider />
      <mu-list-item title="订单号" :afterText="order.orderId" />
      <mu-divider />
      <mu-list-item title="商品总金额" :afterText="order.price | RMB"/>
      <mu-divider />
      <mu-list-item title="下单时间" :afterText="order.createTime | timestamp"/>
      <mu-divider />
      <mu-list-item title="支付状态" :afterText="order.status | orderOuterStatus" />
      <mu-list-item v-if="order.status === 1">
         <mu-raised-button primary  label="去支付" fullWidth @click="handlepay(order)" />
      </mu-list-item>
    </mu-list>
    <el-alert title="您的账户暂时没有订单。" type="info" :closable="false" class="mb20" v-else />
    <el-button type="text" class="mb20 width-100" v-show="limit >= 10" @click="generateOrdersListsAction(limit)"><span class="h2">点击加载更多</span></el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('orders')
export default {
  name: 'OrdersLists',
  computed: {
    ...mapState(['ordersLists', 'limit'])
  },
  methods: {
    ...mapMutations(['handleClearOrdersListsMutation']),
    ...mapActions(['generateOrdersListsAction', 'handleOrdersBcPay']),
    handlepay (instance) {
      let { price, sign, orderId } = instance
      let data = {
        sign,
        orderId,
        title: '阿布跑跑智慧鞋垫',
        amount: String(price * 100)
      }
      console.log(data)
      this.$router.push({ name: 'payMobile', params: { sign: sign, instance: data } })
    }
  },
  activated () {
    this.generateOrdersListsAction()
  },
  deactivated () {
    this.handleClearOrdersListsMutation()
  }
}
</script>
