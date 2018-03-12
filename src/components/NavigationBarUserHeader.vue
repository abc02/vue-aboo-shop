<template>
  <el-row type="flex" justify="center" align="middle" style="height: 60px" class="border-bottom bg-white">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="pointer" @click.native="handleClickRedirectPage('store')">
            ABOO商城
        </el-col>
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20"></el-col>
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="text-right">
          <el-dropdown>
            <span class="pointer">
              我的账号
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                 <router-link :to="{ name: 'preview'}">
                  <span class="pointer">我的账号</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{ name: 'orderslists'}">
                  <span class="pointer">我的订单</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="handleClickSessionStorageUserInfoOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
     <el-row type="flex" justify="start" align="middle" class="text-center">
        <el-col :xs="4" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button type="text" @click="isDialog = true">按钮</el-button>
        </el-col>
        <el-col :xs="16" :sm="0" :md="0" :lg="0" :xl="0" class="h3 gray" @click.native="handleClickRedirectPage('store')">ABOO商城</el-col>
        <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0" @click.native="handleClickRedirectPage('store', { page: 'cart'})" >
          <el-badge :value="cartListsTotal.totalNumbar" class="item" v-if="cartListsTotal">
            <el-button type="text">购物车</el-button>
          </el-badge>
          <el-button type="text" v-else>购物车</el-button>
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
          <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleClickRedirectPage('store')">
            <el-col :xs="24" class="relative">商城首页<i class="absolute-middle-right el-icon-arrow-right"></i></el-col>
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
  name: 'NavigationBarUserHeader',
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
