<template>
    <!-- <el-row type="flex" justify="start" align="top" v-for="(goods, index) in goodsLists" :key="index">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="mb20">
        <router-link :to="{ path: `product/${goods.id}`}">
          <el-card :body-style="{ padding: '10px' }" style="height: 30vh">
            <div style="height: 16vh"  class="mb20  text-center">
              <img :src="goods.img" :alt="goods.goodsName" style="width:auto;">
            </div>
            <h1 class="mb10 h1">{{goods.goodsName}}</h1>
            <p class="ellipsis">{{goods.intr}}</p>
          </el-card>
        </router-link>
      </el-col>
    </el-row> -->
    <mu-list>
      <mu-list-item v-for="(goods, index) in goodsLists" :key="index" exact :to="{ path: `product/${goods.id}`}">
         <mu-card>
          <mu-card-media :title="goods.goodsName" :subTitle="goods.intr">
            <img :src="goods.img" :alt="goods.goodsName" style="width: 310px; height: 310px">
          </mu-card-media>
        </mu-card>
      </mu-list-item>
    </mu-list>
    <!-- <mu-infinite-scroll :scroller="scroller" :loading="isLoadMore" @load="generateGoodsListsAction(limit)"/> -->
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('products')
export default {
  name: 'ProductsLists',
  data () {
    return {
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  computed: {
    ...mapState(['isLoadMore', 'limit', 'goodsLists'])
  },
  methods: {
    ...mapMutations(['handleLimit', 'handleGoodsListsClearMutation']),
    ...mapActions(['generateGoodsListsAction'])
  },
  activated  () {
    this.generateGoodsListsAction(this.limit)
  },
  deactivated () {
    this.handleLimit(0)
    this.handleGoodsListsClearMutation()
  }
}
</script>
