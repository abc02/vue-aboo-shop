<template>
  <el-container direction="vertical" class="mt20">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="text-center mb20 success">
        <i class="el-icon-circle-check-outline" style="font-size: 3.6rem"></i>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" class="border-bottom text-center mb20 pb20 success">
        <span style="font-size: 1.3rem">支付成功</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="0" :sm="16" :md="16" :lg="16" :xl="16" class="text-center">
        <router-link :to="{ name: 'index' }" class="mr20">
          <el-button>继续购物</el-button>
        </router-link>
        <router-link :to="{ name: 'index' }">
          <el-button type="primary">返回首页</el-button>
        </router-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="20" :sm="0" :md="0" :lg="0" :xl="0" class="text-center mb20">
        <router-link :to="{ name: 'mobileIndex' }">
          <el-button class="width-100">继续购物</el-button>
        </router-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="20" :sm="0" :md="0" :lg="0" :xl="0" class="text-center">
        <router-link :to="{ name: 'mobileIndex' }">
          <el-button type="primary" class="width-100">返回首页</el-button>
        </router-link>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import qs from 'qs'
let x = qs.parse(location.search.substr(1))
console.log(x)
export default {
  name: 'Result'
}
</script>
