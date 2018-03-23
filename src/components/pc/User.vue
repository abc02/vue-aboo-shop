<template>
  <el-row type="flex" justify="center" align="top">
    <el-col :span="20" class="mt20">
      <el-container dirction="vertical">
        <el-aside>
            <router-view name="navigationBarLeft" class="height-100" />
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'User'
}
</script>
