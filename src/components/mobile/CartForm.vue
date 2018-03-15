<template>
  <el-table
    v-if="cartLists"
    :data="cartLists"
    :show-header="false"
    stripe
    style="width: 100%">
    <el-table-column
      label="商品"
      width="80">
      <template slot-scope="scope">
        <img :src="scope.row.img" alt="商品图像" style="width: 70px; height:70px;">
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <router-link :to="`/mobile/product/${scope.row.goodsId}`">
          <el-row type="flex" justify="start" align="middle" class="mb10 h3 gray">
            <el-col :span="24">
              {{scope.row.goodsName}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" >
            <el-col :span="24" class="bold">
              {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
            </el-col>
          </el-row>
         </router-link>
      </template>
    </el-table-column>
    <el-table-column
      label="数量"
      width="80">
      <template slot-scope="scope">
        <el-row type="flex" justify="start" align="top">
          <el-col :span="24">
            数量：{{scope.row.number}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" v-if="isEdit">
          <el-col :span="24">
            <el-button type="text" @click="handleCartDeleteAction(scope.row.key)">删除</el-button>
          </el-col>
        </el-row>
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
