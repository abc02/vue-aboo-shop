<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="text-center mb20">
        <i class="el-icon-circle-check-outline" style="font-size: 3.6rem;"></i>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" class="border-bottom text-center pb20">
        <span style="font-size: 1.3rem;">支付成功</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
        <router-link :to="{ name: 'store' }">
          <el-button type="primary">继续购物</el-button>
        </router-link>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: 'Result'
}
</script>
