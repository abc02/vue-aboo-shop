<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="middle" :gutter="10" class="pl20 pr20 pt10 pb10 bg-gray" v-if="userInfo">
      <el-col :span="6"><img :src="userInfo.icon" alt="img" style="width: 60px; height: 60px; border-radius:50%;"></el-col>
      <el-col :span="18">
        <span class=" blod p">{{userInfo.nickName}}</span>
      </el-col>
    </el-row>
    <router-link :to="{ name: 'userMobile' }">
      <el-row type="flex" justify="start" align="middle" class="pl20 pr20 pt20 pb20 border-bottom p pointer">
        <el-col>我的账号</el-col>
      </el-row>
    </router-link>
    <router-link :to="{ name: 'orderslistsMobile' }">
      <el-row type="flex" justify="start" align="middle" class="pl20 pr20 pt20 pb20 border-bottom p pointer">
        <el-col>我的订单</el-col>
      </el-row>
    </router-link>
    <el-row type="flex" justify="center" align="middle" class="mt20 mb20 pt20 pb20">
      <el-col :span="18">
        <el-button type="primary" class="width-100" style="border-radius:20px;" @click="handleUserInfoOutMutation('mobileIndex', $event)">退出</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'UserInfo',
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['handleUserInfoOutMutation'])
  }
}
</script>
