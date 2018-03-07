<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom bg-white height-100">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :xs="0" :sm="16" :md="16" :lg="16" :xl="16">
           <el-menu :default-active="activeIndex" mode="horizontal" background-color="#ffffff" text-color="#000000" active-text-color="#f6655e">
            <el-menu-item index="1" @click="handleClickRedirectPage('index')">首页</el-menu-item>
            <el-menu-item index="2" @click="handleClickRedirectPage('index', { page: 'help'})">帮助</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="text-center">
              <el-button type="primary" size="mini" @click="handleClickRedirectPage('product', {goodsId: 7})">商城</el-button>
            </el-col>
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="text-center">
              <el-button v-if="!userInfo" type="text" @click="handleClickRedirectPage('login')">登录</el-button>
              <el-dropdown v-else>
                <div style="width: 40px; overflow: hidden; border-radius: 50%;">
                  <img :src="userInfo.Icon" alt="头像" >
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="handleClickRedirectPage('user')">我的账号</el-dropdown-item>
                  <el-dropdown-item @click.native="handleClickSessionStorageUserInfoOut">登出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="4" :sm="0" :md="0" :lg="0" :xl="0" class="text-center">
              <el-button type="text" size="medium" @click="isChildBar = true" icon="el-icon-menu" class="h1"></el-button>
            </el-col>
            <el-col :xs="16" :sm="0" :md="0" :lg="0" :xl="0" class="text-center">ABOO商城</el-col>
            <el-col :xs="4" :sm="0" :md="0" :lg="0" :xl="0"></el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-dialog
        title="ABOO商城"
        center
        :visible.sync="isChildBar"
        top="60px"
        :fullscreen="true">
        <el-container direction="vertical" class="bg-white pl10 pr10">
          <el-container direction="vertical">
            <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleClickRedirectPage('user')" v-if="userInfo">
              <el-col :xs="22" :sm="0" :md="0" :lg="0" :xl="0">我的账号</el-col>
              <el-col :xs="2" :sm="0" :md="0" :lg="0" :xl="0" class="text-center">
                <i class="el-icon-arrow-right"></i>
              </el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10" @click.native="handleClickRedirectPage('login')" v-else>
              <el-col :xs="22" :sm="0" :md="0" :lg="0" :xl="0">我的账号</el-col>
              <el-col :xs="2" :sm="0" :md="0" :lg="0" :xl="0" class="text-center">
                <i class="el-icon-arrow-right"></i>
              </el-col>
            </el-row>
          </el-container>
          <el-container direction="vertical">
            <el-row type="flex" justify="start" align="middle" class="border-bottom pt20 pb20">
              <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="p bold">商品分类</el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="pt10 pb10" @click.native="handleClickRedirectPage('product', { goodsId: 7 })">
              <el-col :xs="22" :sm="0" :md="0" :lg="0" :xl="0">智慧鞋垫</el-col>
              <el-col :xs="2" :sm="0" :md="0" :lg="0" :xl="0" class="text-center">
                <i class="el-icon-arrow-right"></i>
              </el-col>
            </el-row>
          </el-container>
        </el-container>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import CommonBase from 'mixins/CommonBase'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'NavigationBar',
  props: ['activeIndex'],
  mixins: [CommonBase],
  data () {
    return {
      isChildBar: false
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['generateUserInfo'])
  },
  created () {
    this.generateUserInfo()
  }
}
</script>
