<template>
  <el-container direction="vertical" v-loading="isLoading">
    <el-row type="flex" justify="start" align="middle" class="h1 blod mt20 ml20 mb20">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <!-- {{title}} -->
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Address',
  computed: {
    ...mapState(['isLoading'])
  }
}
</script>
