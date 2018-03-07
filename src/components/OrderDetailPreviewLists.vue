<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="12" :sm="20" :md="20" :lg="20" :xl="20">
          <i class="el-icon-location"></i> 订单概览
        </el-col>
        <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="4" class="text-right">
          <el-button type="text" @click="handleClickRedirectPage('cart')">返回购物车</el-button>
        </el-col>
      </el-row>
      <el-row  type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-table
            :data="cartLists"
            :show-header="false"
            style="width: 100%">
            <el-table-column>
              <template slot-scope="scope">
                <el-row type="flex" justify="start" align="middle">
                  <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
                    <img class="order-image" :src="scope.row.img" alt="商品图像">
                  </el-col>
                  <el-col :xs="14" :sm="15" :md="15" :lg="15" :xl="15">
                    <el-button type="text" @click="handleClickRedirectPage('product', {goodsId: scope.row.goodsId})">{{scope.row.goodsName}}</el-button>
                  </el-col>
                  <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
                    {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
                  </el-col>
                  <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
                     {{`数量：${scope.row.number}`}}
                  </el-col>
                  <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="text-right">
                      {{`￥${Number.parseFloat(Number.parseFloat(scope.row.price) * Number.parseInt(scope.row.number)).toFixed(2)}`}}
                  </el-col>
                  <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0" class="text-right">
                    <div>
                      {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
                    </div>
                    <div>
                      {{`数量：${scope.row.number}`}}
                    </div>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import OrderBase from 'components/OrderBase'
export default {
  name: 'OrderDetailPreviewLists',
  props: ['loading', 'cartLists', 'addressLists'],
  extends: OrderBase
}
</script>
