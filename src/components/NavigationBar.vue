<style lang="scss">
.user-info-icon{
  display: inline-block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
.border-bottom {
  border-bottom: solid 1px #e6e6e6;
  .el-menu--horizontal {
    border-bottom: none;
  }
}
</style>

<template>
  <el-row class="border-bottom">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <el-row type="flex" align="middle">
        <el-col :xs="24" :sm="24" :md="{span:3,offset:16}" :lg="{span:3,offset:16}" :xl="{span:3,offset:16}" class="text-center">
          <el-menu :default-active="activeIndex" mode="horizontal" background-color="#ffffff" text-color="#000000" active-text-color="#f6655e">
            <el-menu-item index="1" @click="handClickRedirectPage('index')">首页</el-menu-item>
            <el-menu-item index="2" @click="handClickRedirectPage('help')">帮助</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xs="24" :sm="24" :md="1" :lg="1" :xl="1" class="text-center">
          <el-button type="primary" size="mini" @click="handClickRedirectPage('product', {goodsId: 1})">商城</el-button>
        </el-col>
        <el-col :xs="24" :sm="24" :md="1" :lg="1" :xl="1" class="text-center">
          <el-button v-if="!userInfo" type="text" @click="handClickRedirectPage('login')">登录</el-button>
          <el-dropdown v-else>
            <span class="el-dropdown-link">
              <img :src="userInfo.Icon" alt="头像" class="user-info-icon">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="handClickRedirectPage('user')">我的账号</el-dropdown-item>
              <el-dropdown-item @click.native="handleClickRedirectLogOut">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
<!--<el-menu-item index="3" >产品</el-menu-item>
  <el-menu-item index="4" v-if="!userInfo" >登录</el-menu-item>
  <el-submenu v-else index="4">
    <template slot="title">
      <img :src="userInfo.Icon" alt="头像" class="user-info-icon">
    </template>
    <el-menu-item index="4-1" >我的账号</el-menu-item>
    <el-menu-item index="4-2" @click="handleClickRedirectLogOut">登出</el-menu-item>
  </el-submenu> -->
</template>

<script>
import Vue from 'vue'
import qs from 'qs'
import VueSessionStorage from 'vue-sessionstorage'
import NavigationBase from './NavigationBase'
Vue.use(VueSessionStorage)
export default {
  name: 'NavigationBar',
  props: ['activeIndex'],
  extends: NavigationBase,
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    handleClickRedirectLogOut () {
      this.$session.remove('userInfo')
      location.reload()
    }
  },
  created () {
    let isUserInfo = this.$session.exists('userInfo')
    if (!isUserInfo) return
    let userInfoString = this.$session.get('userInfo')
    this.userInfo = qs.parse(userInfoString)
  }
}
</script>
