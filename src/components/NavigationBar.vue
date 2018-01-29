<style scoped>
.el-menu--horizontal{
  /* border-bottom: inherit; */
  /* background-color: inherit; */
}
.userInfo-icon{
  display: inline-block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
</style>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#ffffff" text-color="#000000" active-text-color="#f6655e">
    <el-container class="wraper">
      <el-row class="el-row" type="flex" justify="end">
        <el-menu-item index="1" @click="handleClickRedirectToIndex(1)">首页</el-menu-item>
        <el-menu-item index="2" @click="handleClickRedirectToHelp(2)">帮助</el-menu-item>
        <el-menu-item index="3" @click="handleClickRedirectToProduct(3)">产品</el-menu-item>
        <el-menu-item index="4" v-if="!userInfo" @click="handleClickRedirectToLogIn(4)">登录</el-menu-item>
        <el-submenu v-else index="4">
          <template slot="title">
            <img :src="userInfo.Icon" alt="头像" class="userInfo-icon">
          </template>
          <el-menu-item index="4-1" @click="handleClickRedirectToUser">我的账号</el-menu-item>
          <el-menu-item index="4-2" @click="handleClickRedirectToLogOut">登出</el-menu-item>
        </el-submenu>
      </el-row>
    </el-container>
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
    handleClickRedirectToIndex (index) {
      location.href = 'index.html'
    },
    handleClickRedirectToHelp (index) {
      location.href = 'help.html'
    },
    handleClickRedirectToProduct (index) {
      location.href = 'product.html?goodsId=1'
    },
    handleClickRedirectToLogIn (index) {
      location.href = 'login.html'
    },
    handleClickRedirectToUser () {
      location.href = 'user.html'
    },
    handleClickRedirectToLogOut () {
      this.$session.remove('userInfo')
      location.reload()
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
