<template>
  <div direction="vertical">
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
      <template v-for="(item, index) in list">
        <mu-list-item :title="item" :key="index" />
        <mu-divider :key="index" />
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>
<script>
import { mapState, createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('products')
export default {
  name: 'ProductsLists',
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 10,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  computed: {
    ...mapState({
      isLoaing: 'isLoang',
      goodsLists: state => state.products.goodsLists
    })
  },
  methods: {
    ...mapActions(['generateGoodsListsAction']),
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    }
  },
  activated  () {
    // this.generateGoodsListsAction(0)
  },
  deactivated () {
  }
}
</script>
