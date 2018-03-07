<template>
  <el-container>
  <el-header>
    <NavigationBar />
  </el-header>
  <el-row type="flex" justify="center" align="middle">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <router-view></router-view>
    </el-col>
  </el-row>
  </el-container>
</template>
<script>
import NavigationBar from 'components/NavigationBar.vue'
export default {
  name: 'Cart',
  components: {
    NavigationBar
  }
}
</script>
