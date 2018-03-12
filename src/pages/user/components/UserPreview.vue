<template>
  <el-container class="border pt20 pb20 pl20 pr20 mt20 ml20 mr20 mb20">
    <el-row class="mr20">
      <el-col>
        <img :src="userInfo.Icon" alt="img" style="width: 120px; height: 120px">
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-row class="h1 bold mb10">
          <el-col>
            {{userInfo.NickName}}
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col>
            <router-link :to="{ name: 'profile' }">
              <el-button type="text">编辑我的个人资料</el-button>
            </router-link>
            <el-button type="text">修改密码</el-button>
          </el-col>
        </el-row> -->
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Preview',
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>
