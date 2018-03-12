<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom" style="height: 60px">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="pointer">
          <router-link :to="{ name: 'store' }">
            ABOO商城
          </router-link>
        </el-col>
        <!-- <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="pointer">
          商品分类<i class="el-icon-arrow-down"></i>
        </el-col> -->
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="text-center">
        <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button type="text" @click="isDialog = true">按钮</el-button>
        </el-col>
        <el-col :xs="12" :sm="0" :md="0" :lg="0" :xl="0" class="h3 gray">
          <router-link :to="{ name: 'store' }">
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
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleClickRedirectPage('user')" v-if="userInfo">
            <el-col :xs="24" class="realtive">我的账号 <i class="el-icon-arrow-right absolute-middle-right"></i></el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleClickRedirectPage('login')" v-else>
            <el-col :xs="24" class="relative">登录<i class="absolute-middle-right el-icon-arrow-right"></i></el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt20 pb20">
            <el-col :xs="24" class="p bold">商品分类</el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleRedirctProduct(7)">
            <el-col :xs="24" class="relative pl10 pr10">智慧鞋垫 <i class="absolute-middle-right el-icon-arrow-right"></i></el-col>
          </el-row>
        </el-container>
      </el-dialog>
    </el-col>
  </el-row>
</template>
<script>
import CommonBase from 'mixins/CommonBase'
import { mapState, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')
export default {
  name: 'NavigationBarStorePage',
  mixins: [CommonBase],
  data () {
    return {
      isDialog: false
    }
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(['cartListsTotal'])
  },
  methods: {
    handleRedirctProduct (goodsId) {
      this.$router.push({ name: 'product', params: { goodsId } })
      this.isDialog = false
    }
  }
}
</script>
