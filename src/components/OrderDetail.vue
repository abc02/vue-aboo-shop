<style scoped>
.order-el-row{
  border-bottom: 1px solid #eee;
  padding: 16px 0;
  margin-bottom: 0;
}
.order-el-row:last-child {
  border-bottom: none;
}
</style>

<template>
  <el-container>
    <el-header>
      我的订单详情
    </el-header>
    <el-main v-loading="loading" v-if="orderADetail && orderBList">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="12">订单号：{{orderId}}</el-col>
        <!-- <el-col :span="3" class="right-center">
            <el-button
              size="mini"
              type="primary"
              >继续支付</el-button>
        </el-col> -->
      </el-row>
      <el-row>
        <el-col>
          <el-steps :active="orderADetail.Status - 1" align-center>
          <el-step title="下单"></el-step>
          <el-step title="支付成功"></el-step>
          <el-step title="已发货"></el-step>
          <el-step title="订单成功"></el-step>
        </el-steps>
        </el-col>
      </el-row>
      <el-row class="order-el-row">
        <el-col :span="3" :offset="3">
          支付状态：
        </el-col>
        <el-col :span="3">
          {{modifyOrderADetailail.Status.text}}
        </el-col>
      </el-row>
      <el-row class="order-el-row">
        <el-col :span="3" :offset="3">
          支付方式：
        </el-col>
        <el-col :span="6">
          {{modifyOrderADetailail.PayType}}
        </el-col>
      </el-row>
      <el-row class="order-el-row">
        <el-col :span="3" :offset="3">
          总金额：
        </el-col>
        <el-col :span="6">
          {{modifyOrderADetailail.Pirce}}
        </el-col>
      </el-row>
      <el-row class="order-el-row">
        <el-col :span="3" :offset="3">
          下单时间：
        </el-col>
        <el-col :span="6">
          {{modifyOrderADetailail.CreateTime}}
        </el-col>
      </el-row>
      <el-row class="order-el-row">
        <el-col :span="3" :offset="3">
          收货地址：
        </el-col>
        <el-col :span="18">
          {{modifyOrderADetailail.Address}}
        </el-col>
      </el-row>
      <el-row>
        <el-col>
           <el-table
            :data="orderBList"
            style="width: 100%">
            <el-table-column
              header-align="center"
              label="商品">
              <template slot-scope="scope">
                  <el-row :gutter="20" type="flex" justify="start" align="middle">
                    <el-col :span="2">
                       <img class="order-image" :src="scope.row.Img" alt="商品图像">
                    </el-col>
                    <el-col :span="22">
                      {{scope.row.GoodsName}}
                    </el-col>
                  </el-row>
                </template>
            </el-table-column>
            <el-table-column
              align="right"
              label="价格"
              width="120">
                <template slot-scope="scope">
                   {{`￥${Number.parseFloat(scope.row.Price).toFixed(2)}`}}
                </template>
            </el-table-column>
            <el-table-column
              align="right"
              prop="Number"
              label="数量"
              width="120">
            </el-table-column>
            <el-table-column
              align="right"
              label="小计"
              width="120">
              <template slot-scope="scope">
                {{`￥${Number.parseFloat(scope.row.Number * scope.row.Price).toFixed(2)}`}}
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row class="order-el-row right-center" type="flex" justify="end" align="middle">
        <el-col :span="3">
            商品总金额：
        </el-col>
        <el-col :span="3">
          {{modifyOrderBListArr.total}}
        </el-col>
      </el-row>
     <!-- <el-row class="order-el-row right-center" type="flex" justify="end" align="middle">
        <el-col :span="3">
            运费：
        </el-col>
        <el-col :span="3">
          +￥0.00
        </el-col>
      </el-row> -->
      <el-row class="order-el-row right-center" type="flex" justify="end" align="middle">
        <el-col :span="3">
            总计：
        </el-col>
        <el-col :span="3">
          {{modifyOrderBListArr.total}}
        </el-col>
      </el-row>
      <el-row class="order-el-row" type="flex" justify="end" align="middle">
        <el-col :span="3" class="right-center">
          <el-button @click="handleClickOrderStatus('1')">返回列表</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import OrderBase from './OrderBase'
export default {
  name: 'OrderDetail',
  extends: OrderBase,
  props: ['orderId', 'orderADetail', 'orderBList', 'loading'],
  computed: {
    modifyOrderADetailail () {
      let obj = {}
      let address = JSON.parse(this.orderADetail.Address)
      let date = Number.parseInt(this.orderADetail.CreateTime + '000')
      obj.Address = `${address.Province} ${address.City} ${address.Area} ${address.Detail} ${address.NickName} ${address.Phone}`
      obj.Pirce = `￥${Number.parseFloat(this.orderADetail.Price).toFixed(2)}`
      obj.CreateTime = this.handleOrderCreateTimeText(date)
      obj.Status = this.handleOrderStatusArrayText(this.orderADetail)
      obj.PayType = '在线支付'
      return obj
    },
    modifyOrderBListArr () {
      let arr = []
      let total = 0
      this.orderBList.slice(0).map(order => {
        total += (order.Number * order.Price)
      })
      return {
        arr,
        total: `￥${Number.parseFloat(total).toFixed(2)}`
      }
    }
  },
  // methods: {
  //   handleClickOrderStatus (status) {
  //     this.$emit('on-handle-click-order-status', status)
  //   }
  // },
  created () {
    this.generateGetOrderDetail(this.orderId)
    // this.$emit('on-handle-get-order-detail', this.orderId)
  }
}
</script>
