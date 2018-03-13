<template>
  <el-row type="flex" justify="center" align="middle" style="height: 60px" class="border-bottom bg-white">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="pointer">
           <router-link to="/">
            ABOO商城
          </router-link>
        </el-col>
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20"></el-col>
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="text-right">
          <el-dropdown v-if="userInfo">
            <span class="p pointer mr20 ml20">
              我的账号
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link :to="{ name: 'info'}">
                <el-dropdown-item>
                    <span class="pointer">我的账号</span>
                </el-dropdown-item>
              </router-link>
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
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'NavigationBarUserHeader',
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['handleUserInfoOutMutation'])
  }
}
</script>
