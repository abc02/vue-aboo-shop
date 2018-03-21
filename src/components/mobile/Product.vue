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
import { mapActions, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('products')
const { mapState, mapMutations } = createNamespacedHelpers('cart')
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
    ...mapMutations(['handeDialogClose', 'handleGoodsSpecClearMutation']),
    ...mapActions({
      generateGoodsSpecAction: 'products/generateGoodsSpecAction',
      handleCartAddAction: 'cart/handleCartAddAction'
    })
  },
  // created () {
  //   this.handeDialogClose()
  //   this.generateGoodsSpecAction(this.goodsId)
  // }
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    let { goodsId } = to.params
    if (goodsId) {
      this.handeDialogClose()
      this.generateGoodsSpecAction(goodsId)
    }
    next()
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
