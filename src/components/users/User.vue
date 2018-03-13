<template>
  <el-row type="flex" justify="center" align="top">
    <el-col :span="20" class="min-heigth mt20">
      <el-container direction="vertical">
         <el-aside>
            <router-view name="navigationBarLeft"></router-view>
          </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-col>
  </el-row>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'User',
  methods: {
    ...mapMutations(['handleUserInfoCheckMutation'])
  },
  created () {
    console.log('created')
    this.handleUserInfoCheckMutation()
  }
}
</script>
