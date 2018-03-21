<template>
  <mu-list>
    <mu-list-item v-for="(goods, index) in goodsLists" :key="index" exact :to="{ name: 'productMobile', params: { goodsId: goods.id } }">
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
