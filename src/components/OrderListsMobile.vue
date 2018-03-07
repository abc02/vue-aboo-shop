<template>
  <el-container direction="vertical" class="bg-gray" >
    <el-row v-for="(order, index) in orderLists" :key="index" class="bg-white mt10 mb10">
      <el-col>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
          <el-col :xs="6">订单号</el-col>
          <el-col :xs="18" class="text-right">
            {{order.OrderId}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pt10 pb10 border-bottom">
          <el-col :xs="12">
            商品总金额：
          </el-col>
          <el-col :xs="12" class="text-right">
            {{modifyOrderLists[index].Pirce}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10">
          <el-col :xs="12">
            下单时间：
          </el-col>
          <el-col :xs="12" class="text-right">
           {{modifyOrderLists[index].CreateTime}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10">
          <el-col :xs="12">
            支付状态：
          </el-col>
          <el-col :xs="12" class="text-right">
           {{modifyOrderLists[index].Status.text}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="pr10 pl10 pb10 border-bottom">
          <el-col :xs="12">
            支付方式：
          </el-col>
          <el-col :xs="12" class="text-right">
           {{modifyOrderLists[index].PayType}}
          </el-col>
        </el-row>
         <el-row v-if="modifyOrderLists[index].Status.button" type="flex" justify="space-between" align="middle" class="pb20 border-bottom">
          <el-col :xs="24">
            <el-button
              type="primary"
              class="width-100"
              @click="handleBcPay(order)">{{modifyOrderLists[index].Status.button}}</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import OrderBase from './OrderBase'
export default {
  name: 'OrderListsMoblie',
  extends: OrderBase,
  props: ['orderLists', 'loading'],
  computed: {
    modifyOrderLists () {
      if (this.orderLists && this.orderLists.length) {
        let arr = []
        let obj = {}
        let date
        this.orderLists.forEach(order => {
          date = Number.parseInt(order.CreateTime + '000')
          obj.CreateTime = this.handleOrderCreateTimeText(date)
          obj.Pirce = `￥${Number.parseFloat(order.Price).toFixed(2)}`
          obj.Status = this.handleOrderStatusArrayText(order)
          obj.PayType = '在线支付'
          arr.push(obj)
          obj = {}
        })
        return arr
      }
      return []
    }
  }
  // created () {
  //   this.generateGetOrderLists(0)
  // }
}
</script>
