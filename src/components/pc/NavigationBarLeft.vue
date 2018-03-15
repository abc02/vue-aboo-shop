<template>
  <el-menu :default-active="activeIndex" router >
    <!-- <el-menu-item index="1" :route="{ name: 'info'}">
      <i class="el-icon-setting"></i>
      <span slot="title">我的账号</span>
    </el-menu-item> -->
    <el-menu-item index="1" :route="{ name: 'orderslists'}">
        <i class="el-icon-goods"></i>
        <span slot="title">我的订单</span>
    </el-menu-item>
    <el-menu-item index="2" :route="{ name: 'addresslists'}">
        <i class="el-icon-location-outline"></i>
        <span slot="title">我的收货地址</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'NavigationBarLeft',
  props: ['activeIndex']
}
</script>
