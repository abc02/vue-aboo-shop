<template>
  <el-container direction="vertical" v-if="currentGoods">
    <el-row type="flex" justify="start" align="top" class="mt20 mb20">
      <el-col :span="24" class="border-bottom text-center mb20">
        <img :src="currentGoods.img" :alt="currentGoods.specName" style="width: 300px; height: 334px;">
      </el-col>
    </el-row>
    <ProductIntroduce />
    <el-button type="primary" class="bottom-fixed width-100 pt20 pb20" style="z-index: 999;" @click="handleCartAddAction(currentGoods)" >加入购物车</el-button>
    <el-dialog
      center
      :visible="isDialog"
      width="100%"
      :fullscreen="true"
      :modal="false"
      :show-close="false">
      <el-row type="flex" justify="center" align="middle" class="text-center success">
        <el-col :span="24" class="pt20 pb20 pl20 pr20">
          <i class="el-icon-circle-check-outline success mb20" style="font-size: 3.6rem;"></i>
          <p style="font-size: 0.8rem;" class="mb20">{{`${currentGoods.number}件商品已经加入购物车`}}</p>
          <el-button @click="handeDialogClose" class="width-100 mb20">继续购物</el-button>
          <router-link :to="{ name: 'cartMobile' }">
            <el-button type="primary" class="width-100">查看购物车</el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-dialog>
  </el-container>
</template>
<script>
import ProductIntroduce from 'components/product/ProductIntroduce.vue'
import { mapMutations, mapActions, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('products')
const { mapState } = createNamespacedHelpers('cart')
export default {
  name: 'Product',
  props: ['goodsId'],
  components: {
    ProductIntroduce
  },
  computed: {
    ...mapState(['isDialog']),
    ...mapGetters(['currentGoods'])
  },
  methods: {
    ...mapMutations({
      handeDialogClose: 'cart/handeDialogClose',
      handleGoodsSpecClearMutation: 'products/handleGoodsSpecClearMutation'
    }),
    ...mapActions({
      generateGoodsSpecAction: 'products/generateGoodsSpecAction',
      handleCartAddAction: 'cart/handleCartAddAction'
    })
  },
  activated  () {
    console.log('activated')
    this.handeDialogClose()
    this.generateGoodsSpecAction(this.goodsId)
  },
  deactivated () {
    this.handleGoodsSpecClearMutation()
  }
}
</script>
