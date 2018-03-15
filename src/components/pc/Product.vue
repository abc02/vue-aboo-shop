<template>
  <el-container direction="vertical" v-if="currentGoods">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
        <el-row type="flex" justify="start" align="top" class="mt20">
          <el-col :xs="0" :sm="24" :md="12" :lg="12" :xl="12" class="text-center">
            <img :src="currentGoods.img" :alt="currentGoods.specName" style="width: 300px; height: 334px;">
          </el-col>
          <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
            <ProductIntroduce />
            <el-row type="flex" justify="start" align="middle" class="pt20 pb20">
              <el-col>
                <el-button type="primary" size="medium" class="pt10 pb10 pl20 pr20" @click="handleCartAddAction(currentGoods)">加入购物车</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="top">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <img :src="productDetail" alt="alt">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog
        v-if="isDialog"
        :visible="isDialog"
        width="65vw"
        center
        :show-close="false">
        <el-container direction="vertical">
          <el-row type="flex" justify="center" align="middle">
            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="text-center mb20">
              <i class="el-icon-circle-check-outline" style="font-size: 3.6rem;"></i>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" align="middle">
            <el-col :xs="0" :sm="16" :md="16" :lg="16" :xl="16" class="border-bottom text-center pb20">
              <span style="font-size: 1.3rem;">{{`${currentGoods.number}件商品已经加入购物车`}}</span>
            </el-col>
             <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="border-bottom text-center pb20">
              <span style="font-size: 0.8rem;">{{`${currentGoods.number}件商品已经加入购物车`}}</span>
            </el-col>
          </el-row>
        </el-container>
        <el-container direction="vertical" slot="footer">
          <el-row type="flex" justify="center" align="middle">
            <el-col :xs="0" :sm="16" :md="16" :lg="16" :xl="16" >
              <el-button @click="handeDialogClose" class="mr20">继续购物</el-button>
              <router-link :to="{ name: 'cart' }">
                <el-button type="primary">查看购物车</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-container>
      </el-dialog>
  </el-container>
</template>
<script>
import productDetail from 'assets/product_detail.jpg'
import ProductIntroduce from 'components/product/ProductIntroduce.vue'
import { mapActions, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('products')
const { mapState, mapMutations } = createNamespacedHelpers('cart')
export default {
  name: 'Product',
  props: ['goodsId'],
  data () {
    return {
      productDetail
    }
  },
  components: {
    ProductIntroduce
  },
  computed: {
    ...mapState(['isDialog']),
    ...mapGetters(['currentGoods'])
  },
  methods: {
    ...mapMutations(['handeDialogClose']),
    ...mapActions({
      generateGoodsSpecAction: 'products/generateGoodsSpecAction',
      handleCartAddAction: 'cart/handleCartAddAction'
    })
  },
  activated  () {
    this.handeDialogClose()
    this.generateGoodsSpecAction(this.goodsId)
  }
}
</script>
