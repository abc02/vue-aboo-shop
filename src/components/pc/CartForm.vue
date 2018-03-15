<template>
  <el-table
    v-if="cartLists"
    :data="cartLists"
    stripe
    style="width: 100%">
    <el-table-column
      label="商品"
      width="81"
      align="center"
      header-align="left">
      <template slot-scope="scope">
        <img :src="scope.row.img" :alt="scope.row.goodsName" style="width: 46px; height:46px;">
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <router-link :to="{ name: 'product', params: { goodsId: scope.row.goodsId } }">
          <el-button type="text">{{scope.row.goodsName}}</el-button>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column
      label="价格"
      width="227">
      <template slot-scope="scope">
        {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
      </template>
    </el-table-column>
    <el-table-column
      label="数量"
      width="122  ">
      <template slot-scope="scope">
        {{scope.row.number}}
      </template>
    </el-table-column>
    <el-table-column
        label="小计"
        width="122">
      <template slot-scope="scope">
        <el-button type="text" class="padding-0">{{`￥${Number.parseFloat(scope.row.price * scope.row.number).toFixed(2)}`}}</el-button>
      </template>
    </el-table-column>
    <el-table-column
        width="62"
        align="right">
      <template slot-scope="scope">
          <el-button type="text" icon="el-icon-delete" @click="handleCartDeleteAction(scope.row.key)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('cart')
export default {
  name: 'List',
  computed: {
    ...mapState(['cartLists', 'isEdit'])
  },
  methods: {
    ...mapActions(['handleCartDeleteAction'])
  }
}
</script>
