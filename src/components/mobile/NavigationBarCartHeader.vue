<template>
  <el-row type="flex" justify="center" align="middle" style="height: 60px">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle" class="text-center">
        <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button type="text" @click="isDialog = true">按钮</el-button>
        </el-col>
        <el-col :xs="12" :sm="0" :md="0" :lg="0" :xl="0" class="h3 gray">
          <router-link to="/">
            <div>ABOO商城</div>
          </router-link>
        </el-col>
        <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0">
          <router-link :to="{ name: 'cart' }">
            <el-badge :value="cartListsTotal.totalNumbar" class="item" v-if="cartListsTotal">
              <el-button type="text">购物车</el-button>
            </el-badge>
            <el-button type="text" v-else>购物车</el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-dialog
        title=""
        center
        :visible.sync="isDialog"
        top="60px"
        width="100vw"
        :modal="false"
        :show-close="false"
        :fullscreen="false">
        <el-container direction="vertical">
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" v-if="userInfo">
            <el-col :xs="24" class="realtive">
              <router-link :to="{ name: 'orderslists' }" class="width-100 block">我的账号 <i class="el-icon-arrow-right absolute-middle-right"></i></router-link>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" v-else>
            <el-col :xs="24" class="relative">
              <router-link :to="{ name: 'login' }" class="width-100 block">登录<i class="absolute-middle-right el-icon-arrow-right"></i></router-link>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt20 pb20">
            <el-col :xs="24" class="p bold">商品分类</el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleRedirctProduct(7)">
             <router-link :to="{ path: 'mobile/product/7' }" class="width-100 block">智慧鞋垫 <i class="absolute-middle-right el-icon-arrow-right"></i></router-link>
          </el-row>
        </el-container>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapMutations, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')
export default {
  name: 'NavigationBarCartHeader',
  data () {
    return {
      isDialog: false
    }
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo',
      editText: state => state.cart.editText
    }),
    ...mapGetters(['cartListsTotal'])
  },
  watch: {
    '$route' (to, from) {
      this.isDialog = false
    }
  },
  methods: {
    ...mapMutations({
      handleEdit: 'cart/handleEdit'
    })
  }
}
</script>
