<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="h1 blod mt20 mb20 ml20">
        {{title}}
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  computed: {
    ...mapState(['title'])
  }
}
</script>
