<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="top" v-for="(goods, index) in goodsLists" :key="index">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="mb20">
        <router-link :to="{ name: 'product', params: { goodsId: goods.id }}">
          <el-card :body-style="{ padding: '10px' }" style="height: 30vh">
            <div style="height: 16vh"  class="mb20  text-center">
              <img :src="goods.img" :alt="goods.goodsName" style="width:auto;">
            </div>
            <h1 class="mb10 h1">{{goods.goodsName}}</h1>
            <p class="ellipsis">{{goods.intr}}</p>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="top" :gutter="20">
      <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6" v-for="(goods, index) in goodsLists" :key="index">
        <router-link :to="{ name: 'product', params: { goodsId: goods.id }}">
          <el-card :body-style="{ padding: '10px' }" style="height: 30vh">
            <div style="height: 16vh"  class="mb20  text-center">
              <img :src="goods.img" :alt="goods.goodsName" style="width:auto;">
            </div>
            <h1 class="mb10 h1">{{goods.goodsName}}</h1>
            <p class="ellipsis">{{goods.intr}}</p>
          </el-card>
          </router-link>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import { mapState, createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('products')
export default {
  name: 'ProductsLists',
  computed: {
    ...mapState({
      isLoaing: 'isLoang',
      goodsLists: state => state.products.goodsLists
    })
  },
  methods: {
    ...mapActions(['generateGoodsListsAction'])
  },
  created () {
    this.generateGoodsListsAction(0)
  }
}
</script>
