<template>
  <el-menu default-active="1" router>
    <el-menu-item index="1" route="/user/preview">
      <i class="el-icon-setting"></i>
      <span slot="title">我的账号</span>
    </el-menu-item>
    <!-- <el-menu-item index="2" route="/user/profile">
      <i class="el-icon-edit"></i>
      <span slot="title">我的个人资料</span>
    </el-menu-item> -->
    <el-menu-item index="3" route="/user/orders/orderslists">
      <i class="el-icon-goods"></i>
      <span slot="title">我的订单</span>
    </el-menu-item>
    <el-menu-item index="4" route="/user/address/addresslists">
      <i class="el-icon-location-outline"></i>
      <span slot="title">我的收货地址</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'NavigationBarLeft'
}
</script>
