<template>
  <el-container direction="vertical" v-if="cartLists && cartListsTotal" class="mb20">
    <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" class="h1">
          订单概览
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="text-right">
          <router-link :to="{ name: 'cart'}">
            <el-button type="text">返回购物车</el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-table :data="cartLists" :show-header="false" style="width: 100%" class="mb20">
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
            <router-link :to="{ name: 'product', params: { goodsId: scope.row.goodsId } }">
              <el-button type="text">{{scope.row.goodsName}}</el-button>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          align="right"
          label="价格"
          width="319">
          <template slot-scope="scope">
            {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
          </template>
        </el-table-column>
        <el-table-column
          align="right"
          label="数量"
          width="319">
           <template slot-scope="scope">
            数量:{{scope.row.number}}
          </template>
        </el-table-column>
        <el-table-column
          align="right"
          label="小计"
          width="319">
          <template slot-scope="scope">
            <el-button type="text">{{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="end" align="middle">
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
          <el-row type="flex" justify="start" align="middle" class="text-right border-bottom mb20 pb10 pt10">
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">运费：</el-col>
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="p">包邮</el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="text-right mb20">
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="h3">应付总金额:</el-col>
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
                <el-button type="text" class="h1 padding-0">{{cartListsTotal.totalPrice}}</el-button>
              </el-col>
          </el-row>
        </el-col>
      </el-row>
  </el-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('cart')
export default {
  name: 'OrderPreview',
  computed: {
    ...mapState(['cartLists']),
    ...mapGetters(['cartListsTotal'])
  },
  methods: {
    ...mapActions(['generateCartListsAction'])
  },
  created () {
    if (!this.cartLists) {
      this.generateCartListsAction()
    }
  }
}
</script>
