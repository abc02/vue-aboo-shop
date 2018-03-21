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
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog
      v-if="isDialog"
      :visible="isDialog"
      width="45vw"
      center
      :show-close="false">
        <el-row type="flex" justify="center" align="middle" class="text-center success">
          <el-col :span="24" class="pt20 pb20">
            <i class="el-icon-circle-check-outline mb20" style="font-size: 3.6rem;"></i>
              <p style="font-size: 1.3rem;">{{`${currentGoods.number}件商品已经加入购物车`}}</p>
          </el-col>
        </el-row>
      <el-container direction="vertical" slot="footer">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="16" >
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
  activated () {
    this.generateGoodsSpecAction(this.goodsId)
  },
  deactivated () {
    this.handeDialogClose()
    this.handleGoodsSpecClearMutation()
  }
}
</script>
