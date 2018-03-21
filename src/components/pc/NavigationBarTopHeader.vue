<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom" style="background-color:#f7f8f9">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20" class="pt10 pb10">
      <el-row type="flex" justify="space-between" align="top">
      <el-col :xs="0" :sm="18" :md="18" :lg="18" :xl="18">
          <span class="mr20 p pointer relaitve">
            <a href="https://abpao.com" target="_blank">
              <img :src="aboologo" alt="logo" style="width: 28px;height: 28px;" class="absolute-middle-left">
              <span style="margin-left: 36px;">阿布官网</span>
            </a>
          </span>
          <span class="p">订单满¥99包邮。支持支付宝、微信。</span>
        </el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6" class="text-right">
          <router-link :to="{ name: 'cart' }">
            <span class="p pointer mr20 ml20">
              购物车
              <el-button type="primary" round class="ml10" style="padding: 3px 9px;" v-if="cartListsTotal">{{cartListsTotal.totalNumbar}}</el-button>
            </span>
          </router-link>
          <el-dropdown v-if="userInfo" class="p pointer">
            <span class="relative" style="margin-left: 35px;"><img :src="userInfo.icon" alt="icon" style="width: 24px; height: 24px; margin-left: -35px;" class="border-radius mr10 absolute-middle-left" />{{userInfo.nickName}} </span>
            <el-dropdown-menu slot="dropdown">
              <router-link :to="{ name: 'orderslists'}">
                <el-dropdown-item>
                    <span class="pointer">我的订单</span>
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item @click.native="handleUserInfoOutMutation">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="p" v-else>
            <router-link :to="{ name: 'login'}" class="mr20">登录</router-link>
            <router-link :to="{ name: 'register'}" class="mr20">注册</router-link>
          </span>
        </el-col>
      </el-row>
    </el-col>
    </el-row>
</template>

<script>
import aboologo from 'assets/icon108.png'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'NavigationBarTopHeader',
  data () {
    return {
      aboologo
    }
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters({
      cartListsTotal: 'cart/cartListsTotal'
    })
  },
  methods: {
    ...mapMutations(['handleUserInfoOutMutation'])
  }
  // created () {
  //   this.generateUserInfoMutation()
  // }
}
</script>
