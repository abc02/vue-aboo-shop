<template>
  <el-menu default-active="1">
    <el-menu-item index="1" route="/user">
      <router-link :to="{ name: 'user'} ">
        <i class="el-icon-setting"></i>
        <span>我的账号</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link :to="{ name: 'orderslists'} ">
        <i class="el-icon-goods"></i>
        <span>我的订单</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="3" route="/user/address/addresslists">
      <router-link :to="{ name: 'addresslists'} ">
        <i class="el-icon-location-outline"></i>
        <span>我的收货地址</span>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'NavigationBarLeft'
}
</script>
