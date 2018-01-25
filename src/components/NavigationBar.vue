<style scoped>
.el-menu--horizontal{
  border-bottom: inherit;
  background-color: inherit;
}
</style>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#ffffff" text-color="#000000" active-text-color="#f6655e">
      <el-row class="el-row" type="flex" justify="end">
        <el-menu-item index="1" @click="redirectToIndex(1)">首页</el-menu-item>
        <el-menu-item index="2" @click="redirectToHelp(2)">帮助</el-menu-item>
        <el-menu-item index="3" @click="redirectToProduct(3)">产品</el-menu-item>
        <el-menu-item index="4" v-if="!userInfo" @click="redirectToLogIn(4)">登录</el-menu-item>
        <el-menu-item index="4" v-else @click="redirectToProfile(4)">{{userInfo.NickName}}</el-menu-item>
      </el-row>
  </el-menu>
</template>

<script>
import Vue from 'vue'
import qs from 'qs'
import VueSessionStorage from 'vue-sessionstorage'
Vue.use(VueSessionStorage)
export default {
  name: 'NavigationBar',
  props: ['activeIndex'],
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    redirectToIndex (index) {
      location.href = 'index.html'
    },
    redirectToHelp (index) {
      location.href = 'help.html'
    },
    redirectToProduct (index) {
      location.href = 'product.html?goodsId=1'
    },
    redirectToLogIn (index) {
      location.href = 'login.html'
    },
    redirectToProfile (index) {
      location.href = 'profile.html'
    }
  },
  created () {
    let isUserInfo = this.$session.exists('userInfo')
    if (isUserInfo) {
      let userInfoString = this.$session.get('userInfo')
      this.userInfo = qs.parse(userInfoString)
    }
  }
}
</script>
