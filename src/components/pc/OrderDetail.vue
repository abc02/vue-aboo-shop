<template>
  <el-container direction="vertical" v-if="orderADetail && orderBList">
      <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
          <router-link :to="{ name: 'orderslists'}">
            <el-button icon="el-icon-arrow-left" size="mini"></el-button>
          </router-link>
        </el-col>
        <el-col :xs="0" :sm="18" :md="18" :lg="18" :xl="18">订单号：{{orderId}}</el-col>
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4" v-if="orderADetail.status.button" class="text-right">
          <el-button size="mini" type="primary">{{orderADetail.status.button}}</el-button>
        </el-col>
      </el-row>
      <el-container direction="vertical" class="border pt20 pb20 pl10 pr10">
        <el-row type="flex" justify="start" align="middle" class="pt20 pb20">
          <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <el-steps :active="orderADetail.status.status - 1" align-center>
              <el-step title="下单"></el-step>
              <el-step title="支付成功"></el-step>
              <el-step title="已发货"></el-step>
              <el-step title="订单成功"></el-step>
            </el-steps>
          </el-col>
        </el-row>
        <el-container direction="vertical" class="mb20">
          <el-row type="flex" justify="start" align="middle" class="pt20 pb20 border-bottom">
            <el-col :xs="0" :sm="5" :md="5" :lg="5" :xl="5" class="text-right">
              支付状态：
            </el-col>
            <el-col :xs="0" :sm="19" :md="19" :lg="19" :xl="19">
              {{orderADetail.status.text}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pt20 pb20 border-bottom">
            <el-col :xs="0" :sm="5" :md="5" :lg="5" :xl="5" class="text-right">
              支付方式：
            </el-col>
            <el-col :xs="0" :sm="19" :md="19" :lg="19" :xl="19">
              {{orderADetail.payType}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pt20 pb20 border-bottom">
            <el-col :xs="0" :sm="5" :md="5" :lg="5" :xl="5" class="text-right">
              总金额：
            </el-col>
            <el-col :xs="0" :sm="19" :md="19" :lg="19" :xl="19">
              {{orderADetail.price}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pt20 pb20 border-bottom">
            <el-col :xs="0" :sm="5" :md="5" :lg="5" :xl="5" class="text-right">
              下单时间：
            </el-col>
            <el-col :xs="0" :sm="19" :md="19" :lg="19" :xl="19">
              {{orderADetail.createTime}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pt20 pb20">
            <el-col :xs="0" :sm="5" :md="5" :lg="5" :xl="5" class="text-right">
              收货地址：
            </el-col>
            <el-col :xs="0" :sm="19" :md="19" :lg="19" :xl="19">
              {{orderADetail.addressLonger}}
            </el-col>
          </el-row>
        </el-container>
        <el-container direction="vertical" class="pl20 pr20">
          <el-table :data="orderBList" header-row-class-name="bg-gray" header-cell-class-name="bg-gray" style="width: 100%">
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
        </el-container>
        <el-container direction="vertical" class="pl20 pr20">
          <el-row type="flex" justify="start" align="middle" class="pt10 pb10 text-right">
            <el-col :xs="0" :sm="22" :md="22" :lg="22" :xl="22">
                商品总金额：
            </el-col>
            <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
              {{orderADetail.price}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pt10 pb10 border-bottom text-right">
            <el-col :xs="0" :sm="22" :md="22" :lg="22" :xl="22">
                运费：
            </el-col>
            <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
              +￥0.00
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pt20 pb20 text-right">
            <el-col :xs="0" :sm="22" :md="22" :lg="22" :xl="22">
                总计：
            </el-col>
            <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
              {{orderADetail.price}}
            </el-col>
          </el-row>
        </el-container>
      </el-container>
  </el-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orders')
export default {
  name: 'OrderDetail',
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
