<style>
.el-table td{
  padding: 5px 0;
}
</style>

<template>
  <el-container>
      <el-header height="40px">
        我的订单
      </el-header>
      <el-main v-loading="loading" >
        <el-row v-if="orderLists && orderLists.length">
          <el-col>
            <el-table
              :data="orderLists"
              stripe
              style="width: 100%">
              <el-table-column
                label="订单号">
                <template slot-scope="scope">
                  <el-row :gutter="20" type="flex" justify="start" align="middle">
                    <el-col :span="2">
                       <img class="order-image" :src="scope.row.Img" alt="商品图像">
                    </el-col>
                    <el-col :span="22">
                      <el-button type="text" @click="handleClickOrderStatus('2', scope.row.OrderId)">{{scope.row.OrderId}}</el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column
                align="right"
                label="总计"
                width="120">
                <template slot-scope="scope">
                  {{`￥${Number.parseFloat(scope.row.Price).toFixed(2)}`}}
                </template>
              </el-table-column>
              <el-table-column
                align="right"
                label="状态"
                width="200">
                <template slot-scope="scope">
                  <el-row type="flex" justify="space-between" align="middle">
                    <el-col>{{orderStatusText[scope.$index].text}}</el-col>
                    <el-col v-if="orderStatusText[scope.$index].button">
                      <el-button
                      size="mini"
                      type="primary"
                      @click="handleBcPay(scope.row)"
                      >{{orderStatusText[scope.$index].button}}</el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col>
             <el-alert
                title="您的账户暂时没订单。"
                type="info"
                :closable="false">
            </el-alert>
          </el-col>
        </el-row>
        <el-row type="flex" justify="end" align="middle" v-if="limit >= 10">
          <el-col :span="6">
            <el-button-group>
              <el-button size="medium"
                icon="el-icon-arrow-left"
                @click="handleClickPreviousPage"
                >上一页</el-button>
              <el-button size="medium"
                @click="handleClickNextPage"
                >下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
          </el-col>
        </el-row>
        </el-main>
  </el-container>
</template>

<script>
import OrderBase from './OrderBase'
export default {
  name: 'OrderList',
  extends: OrderBase,
  props: ['orderLists', 'loading', 'limit'],
  computed: {
    orderStatusText () {
      if (this.orderLists && this.orderLists.length) {
        return this.handleOrderStatusArrayText(this.orderLists)
      }
      return []
    }
  },
  methods: {
    handleClickPreviousPage () {
      let limit = ((this.limit - this.orderLists.length) - 10)
      if (limit < 0) limit = 0
      this.$emit('on-handle-get-order-lists', limit)
    },
    handleClickNextPage () {
      this.$emit('on-handle-get-order-lists', this.limit)
    }
    // handleClickOrderStatus (status, orderId) {
    //   this.$emit('on-handle-click-order-status', status, orderId)
    // }
  },
  created () {
    this.generateGetOrderLists(0)
    // this.$emit('on-handle-get-order-lists', 0)
  }
}
</script>
