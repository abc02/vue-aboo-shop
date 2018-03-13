<template>
  <el-row type="flex" justify="center" align="middle" style="height: 60px">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
       <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="text-center pointer">
          <router-link to="/">
            ABOO商城
          </router-link>
        </el-col>
        <el-col :xs="0" :sm="22" :md="22" :lg="22" :xl="22"></el-col>
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" >
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'NavigationBarBuyHeader'
}
</script>
