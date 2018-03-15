<template>
  <el-container direction="vertical">
    <router-view name="swiper" />
    <el-row type="flex" justify="center" align="top">
      <el-col :span="24">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: 'Mobile'
}
</script>
