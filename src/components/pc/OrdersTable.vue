<template>
  <el-container direction="vertical" class="pl20 pr20 pb20" v-if="orderADetail && orderBList">
    <el-row type="flex" class="mb20">
      <el-col :span="24">
        <el-steps :active="orderADetail.status - 1" align-center>
          <el-step title="下单"></el-step>
          <el-step title="支付成功"></el-step>
          <el-step title="已发货"></el-step>
          <el-step title="订单成功"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="pb10 mb10 border-bottom">
      <el-col :span="5" class="text-right">
        支付状态：
      </el-col>
      <el-col :span="19">
        {{orderADetail.status | orderOuterStatus }}
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="pb10 mb10 border-bottom">
      <el-col :span="5" class="text-right">
        支付方式：
      </el-col>
      <el-col :span="19">
        {{orderADetail.payType | payType }}
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="pb10 mb10 border-bottom">
      <el-col :span="5" class="text-right">
        总金额：
      </el-col>
      <el-col :span="19">
        {{orderADetail.price | RMB }}
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="pb10 mb10 border-bottom">
      <el-col :span="5" class="text-right">
        下单时间：
      </el-col>
      <el-col :span="19">
        {{orderADetail.createTime | timestamp }}
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="pb10 mb10">
      <el-col :span="5" class="text-right">
        收货地址：
      </el-col>
      <el-col :span="19">
        {{orderADetail.addressLonger}}
      </el-col>
    </el-row>
    <el-table :data="orderBList" header-row-class-name="bg-gray" header-cell-class-name="bg-gray" style="width: 100%" class="mb20">
      <el-table-column
        width="70">
        <template slot-scope="scope">
          <img :src="scope.row.img" :alt="scope.row.goodsName">
        </template>
      </el-table-column>
      <el-table-column
        header-align="center"
        label="商品">
        <template slot-scope="scope">
          <el-button type="text">{{scope.row.goodsName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        align="right"
        label="价格"
        width="119">
      </el-table-column>
      <el-table-column
        align="right"
        prop="number"
        label="数量"
        width="119">
      </el-table-column>
      <el-table-column
        align="right"
        prop="subTotal"
        label="小计"
        width="119">
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end" align="middle" class="mb10 text-right">
      <el-col :span="6">
          商品总金额：
      </el-col>
      <el-col :span="2">
        {{orderADetail.price | RMB}}
      </el-col>
    </el-row>
    <el-row type="flex" justify="end" align="middle" class="mb10 text-right">
      <el-col :span="6" class="border-bottom ">
          运费：
      </el-col>
      <el-col :span="2" class="border-bottom ">
          包邮
      </el-col>
    </el-row>
    <el-row type="flex" justify="end" align="middle" class="text-right h2 bold">
      <el-col :span="3">
          总计：
      </el-col>
      <el-col :span="3">
        {{orderADetail.price | RMB }}
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orders')
export default {
  name: 'OrdersTable',
  props: ['orderId'],
  computed: {
    ...mapState(['orderADetail', 'orderBList'])
  },
  methods: {
    ...mapActions(['generateOrdersDetailAction'])
  },
  created () {
    this.generateOrdersDetailAction(this.orderId)
  }
}
</script>
