<template>
  <el-container direction="vertical">
    <el-table
      class="mb20"
      v-if="ordersLists && ordersLists.length"
      :data="ordersLists"
      size="small"
      stripe
      style="width: 100%">
      <el-table-column
        width="70"
        label="订单号">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="img" style="width: 28px; height:28px;">
        </template>
      </el-table-column>
      <el-table-column >
        <template slot-scope="scope">
          <el-button type="text" @click="handleDialog(scope.row.orderId)" class="padding-0">{{scope.row.orderId}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="总计"
        width="89">
        <template slot-scope="scope">
          {{scope.row.price | RMB }}
        </template>
      </el-table-column>
      <el-table-column
        align="right"
        label="状态"
        width="187">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handlepay(scope.row)" v-if="scope.row.status === 1">继续支付</el-button>
          <span class="p ml20">{{scope.row.status | orderOuterStatus }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-alert title="您的账户暂时没有订单。" type="info" :closable="false" class="mb20" v-else></el-alert>
    <el-row type="flex" justify="end"  align="middle" class="text-center" v-show="limit >= 10">
      <el-col :span="3" class="p text-right">
        共 {{ordersLists ? ordersLists.length : '0'}} 条
      </el-col>
      <el-col :span="4" class="text-right">
        <el-button type="text" @click="generateOrdersListsAction(limit)">显示更多订单</el-button>
      </el-col>
      <!-- <el-col :span="2" class="pointer" @click.native="handlePreOrdersLists(limit)">
        <i class="el-icon-arrow-left"></i>
      </el-col>
      <el-col :span="2" class="pointer" @click.native="handleNextOrdersLists(limit)">
        <i class="el-icon-arrow-right"></i>
      </el-col> -->
    </el-row>
    <el-dialog
      v-if="isDialog"
      :visible.sync="isDialog">
      <el-row type="flex" slot="title">
        <el-col :span="24" class="h3 pl20 pr20 pt20 pb20">订单号: {{orderId}}</el-col>
      </el-row>
      <OrdersTable :orderId="orderId" />
    </el-dialog>
  </el-container>
</template>
<script>
import OrdersTable from './OrdersTable.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('orders')
export default {
  name: 'OrdersLists',
  data () {
    return {
      isDialog: false,
      orderId: '',
      currentPage: 0,
      currenOrdersLists: null
    }
  },
  components: {
    OrdersTable
  },
  computed: {
    ...mapState(['ordersLists', 'limit'])
  },
  watch: {
    limit (newValue) {
      this.currentPage = Number.parseInt(newValue / 10) + 1
    },
    isDialog (newValues) {
      console.log('isDialog', newValues)
      if (!newValues) {
        this.handleOrdersDetailClearMutation()
      }
    }
  },
  methods: {
    ...mapMutations(['handleOrdersListsClearMutation', 'handleOrdersDetailClearMutation']),
    ...mapActions(['generateOrdersListsAction']),
    handlepay (instance) {
      console.log(instance)
      let { price, sign, orderId } = instance
      let data = {
        sign,
        orderId,
        title: '阿布跑跑商品购买',
        amount: String(price * 100)
      }
      console.log(data)
      this.$router.push({ name: 'orders', params: { sign: sign, instance: data } })
    },
    handleDialog (ordersId) {
      console.log(ordersId)
      this.orderId = ordersId
      this.isDialog = true
    },
    handlePreOrdersLists (limit) {
      console.log(limit)
      let modifyLimit
      if (limit < 10) {
        modifyLimit = 0
      } else if (limit === 10) {
        return window.confirm('已经是第一页了！！')
      } else {
        modifyLimit = Number.parseInt(limit / 10) - 1
      }
      console.log(modifyLimit)
      this.generateOrdersListsAction(modifyLimit)
    },
    handleNextOrdersLists (limit) {
      this.generateOrdersListsAction(limit)
    }
  },
  activated () {
    this.generateOrdersListsAction(this.limit)
  },
  deactivated () {
    console.log('OrdersLists deactivated')
    this.isDialog = false
    this.orderId = ''
    this.handleOrdersListsClearMutation()
  }
  // created () {
  //   this.generateOrdersListsAction()
  // }
}
</script>
