<template>
  <el-container direction="vertical">
    <el-container direction="vertical" class="border-bottom bg-white pt20 mb20">
      <el-row type="flex" justify="strt" align="middle" class="pl10 pr10 pb20 h2">
        <el-col class="h1">{{currentGoods.goodsName}}</el-col>
      </el-row>
      <el-row type="flex" justify="strt" align="middle" class="pl10 pr10 pb10 h1">
        <el-col >{{`￥${Number.parseFloat(currentGoods.price).toFixed(2)}`}}</el-col>
      </el-row>
      <el-row type="flex" justify="strt" align="middle" class="pl10 pr10 pb20 p">
        <el-col>{{currentGoods.intr}}</el-col>
      </el-row>
    </el-container>
    <el-container direction="vertical" class="bg-white border-bottom">
      <ProductSpceDatas />
      <el-container direction="vertical" class="pt20 pl10 pr10">
        <el-row type="flex" justify="strt" align="middle" class="pb20 h3">
          <el-col>数量</el-col>
        </el-row>
        <el-row type="flex" justify="strt" align="middle" class="pb20 h1">
          <el-col>
            <el-input-number @change="handleNumber" :value="currentGoods.number" :min="1" :max="10" label="数量"></el-input-number>
          </el-col>
        </el-row>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import ProductSpceDatas from './ProductSpceDatas.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapMutations } = createNamespacedHelpers('products')
export default {
  name: 'ProductIntroduce',
  components: {
    ProductSpceDatas
  },
  computed: {
    ...mapGetters(['currentGoods'])
  },
  methods: {
    ...mapMutations(['handleNumber'])
  }
}
</script>
