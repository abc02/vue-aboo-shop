<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20"  style="height: 60px; line-height: 60px;">
       <router-link to="/" class="pointer" >ABOO商城</router-link>
    </el-col>
    <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <NavigationBarMobileHeader />
    </el-col>
  </el-row>
</template>
<script>
import NavigationBarMobileHeader from 'components/mobile/NavigationBarMobileHeader.vue'
export default {
  name: 'NavigationBarLoginHeader',
  components: {
    NavigationBarMobileHeader
  }
}
</script>
