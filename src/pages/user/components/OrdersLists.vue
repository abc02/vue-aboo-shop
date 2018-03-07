<template>
  <el-row flex="flex" justify="start" align="top">
    <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" >
      <el-table :data="ordersLists" stripe style="width: 100%" v-if="ordersLists && ordersLists.length">
        <el-table-column
          width="70"
          label="订单号">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="img">
          </template>
        </el-table-column>
        <el-table-column >
          <template slot-scope="scope">
            <router-link :to="{ name: 'ordersdetail',  params: { orderId: scope.row.orderId } }">
              <el-button type="text">{{scope.row.orderId}}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="总计"
          width="89">
        </el-table-column>
        <el-table-column
          align="right"
          label="状态"
          width="187">
          <template slot-scope="scope">
                <span class="p mr10">{{scope.row.status.text}}</span>
                <el-button type="primary" size="mini" v-if="scope.row.status.button">{{scope.row.status.button}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-alert title="您的账户暂时没有订单。 " type="info" :closable="false" class="mb20" v-else></el-alert>
    </el-col>
    <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0"  class="bg-gray">
      <el-container direction="vertical" v-for="(order, index) in ordersLists" :key="index" class="bg-white mb20" v-if="ordersLists && ordersLists.length">
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
          <el-col :xs="6">订单号</el-col>
          <el-col :xs="18" class="text-right">
            {{order.orderId}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
          <el-col :xs="12">
            商品总金额：
          </el-col>
          <el-col :xs="12" class="text-right">
            {{order.price}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10">
          <el-col :xs="12">
            下单时间：
          </el-col>
          <el-col :xs="12" class="text-right">
            {{order.createTime}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10">
          <el-col :xs="12">
            支付状态：
          </el-col>
          <el-col :xs="12" class="text-right">
            {{order.status.text}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
          <el-col :xs="12">
            支付方式：
          </el-col>
          <el-col :xs="12" class="text-right">
            {{order.payType}}
          </el-col>
        </el-row>
        <el-row v-if="order.status.button" type="flex" justify="space-between" align="middle" class="pt20 pb20 border-bottom">
          <el-col :xs="24">
            <el-button type="primary" class="width-100 pt20 pb20">{{order.status.button}}</el-button>
          </el-col>
        </el-row>
      </el-container>
      <el-alert title="您的账户暂时没有订单。 " type="info" :closable="false" class="mb20" v-else></el-alert>
    </el-col>
  </el-row>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orders')
export default {
  name: 'OrdersLists',
  computed: {
    ...mapState(['ordersLists'])
  },
  methods: {
    ...mapActions(['generateOrdersListsAction'])
  },
  created () {
    this.generateOrdersListsAction()
  }
}
</script>
