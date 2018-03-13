<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
       <el-row type="flex" justify="start" align="middle" class="bg-white" style="margin-top: 10vh; height: 90vh; box-shadow: 0 0 24px rgba(0, 0, 0, .2);">
          <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="text-center">
            <LeftBg />
          </el-col>
          <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
            <el-row type="flex" justify="center" align="middle">
              <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
                <router-view />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
    </el-col>
    <el-col :xs="20" :sm="0" :md="0" :lg="0" :xl="0">
      <el-row type="flex" justify="start" align="middle"  class="bg-white" style="height: 100vh;">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import LeftBg from './LeftBg'
export default {
  name: 'Enter',
  components: {
    LeftBg
  }
}
</script>
