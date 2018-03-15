<template>
  <el-container v-if="userInfo">
    <img :src="userInfo.icon" alt="img" class="mr20" style="width: 120px; height: 120px">
    <span class="h1 blod gray">{{userInfo.nickName}}</span>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'UserInfo',
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>
