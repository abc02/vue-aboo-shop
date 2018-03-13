<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom" style="background-color:#f7f8f9">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20" class="pt10 pb10">
      <el-row type="flex" justify="space-between" align="top">
      <el-col :xs="0" :sm="18" :md="18" :lg="18" :xl="18">
          <span class="mr20 p pointer">
            <a href="https://abpao.com" target="_blank">阿布官网</a>
          </span>
          <span class="p">订单满¥99包邮。支持支付宝。</span>
        </el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6" class="text-right">
          <router-link :to="{ name: 'cart' }">
            <span class="p pointer mr20 ml20">
              购物车
              <el-button type="primary" round class="ml10" style="padding: 3px 9px;" v-if="cartListsTotal">{{cartListsTotal.totalNumbar}}</el-button>
            </span>
          </router-link>
          <el-dropdown v-if="userInfo">
            <span class="p pointer mr20 ml20">
              我的账号
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
               <router-link :to="{ name: 'user'}">
                  <span class="pointer">我的账号</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{ name: 'orderslists'}">
                  <span class="pointer">我的订单</span>
                </router-link>
              </el-dropdown-item>
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
import CommonBase from 'mixins/CommonBase'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'NavigationBarTopHeader',
  mixins: [CommonBase],
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters({
      cartListsTotal: 'cart/cartListsTotal'
    })
  },
  methods: {
    ...mapMutations(['generateUserInfoMutation', 'handleUserInfoOutMutation'])
  },
  created () {
    this.generateUserInfoMutation()
  }
}
</script>
