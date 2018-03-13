<template>
  <el-container>
    <el-header>
      <NavigationBar />
    </el-header>
    <el-main class="padding-0"  v-if="currentGoods" v-loading="isLoading">
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
          <el-container direction="vertical" class="bg-white mt20 border-bottom min-heigth"  >
            <el-row type="flex" justify="start" align="top">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="text-center">
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
          </el-container>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <ProductIntroduce />
          <el-row type="flex" justify="start" align="middle" class="pt20 pb20">
            <el-col>
              <el-button type="primary" class="bottom-fixed width-100 pt20 pb20" style="z-index: 999;" @click="handleCartAddAction(currentGoods)" >加入购物车</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import NavigationBar from 'components/NavigationBar'
import ProductIntroduce from './ProductIntroduce.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import qs from 'qs'
let { goodsId } = qs.parse(location.search.substr(1))
export default {
  name: 'Product',
  components: {
    NavigationBar,
    ProductIntroduce
  },
  computed: {
    ...mapState(['isLoading']),
    ...mapGetters({
      currentGoods: 'products/currentGoods'
    })
  },
  methods: {
    ...mapActions({
      generateGoodsSpecAction: 'products/generateGoodsSpecAction',
      handleCartAddAction: 'cart/handleCartAddAction'
    })
  },
  created () {
    this.generateGoodsSpecAction(goodsId)
  }
}
</script>
