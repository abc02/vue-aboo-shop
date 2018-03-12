<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom bg-white" sytle="height: 60px">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :xs="0" :sm="16" :md="16" :lg="16" :xl="16">
          <el-menu :default-active="activeIndex" mode="horizontal" router
            active-text-color="#f6655e" >
            <el-menu-item index="1" :route="{ name: 'index', params: { activeIndex: '1' } }">首页</el-menu-item>
            <el-menu-item index="2" :route="{ name: 'help' , params: { activeIndex: '2' } }">帮助</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="text-center">
              <el-button type="primary" size="mini" @click="handleClickRedirectPage('store')">商城</el-button>
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
    </el-col>
  </el-row>
</template>

<script>
import CommonBase from 'mixins/CommonBase'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'NavigationBarHomePage',
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
