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
        <el-menu-item index="4" @click="redirectToProfile(4)">登录</el-menu-item>
      </el-row>
  </el-menu>
</template>

<script>
import Base from 'mixins/Base'
export default {
  name: 'NavigationBar',
  props: ['activeIndex'],
  mixins: [Base]
}
</script>
