<template>
  <el-container direction="vertical">
    <router-view name="swiper" />
    <el-row type="flex" justify="center" align="top" class="mt20">
      <el-col :span="20">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'PC'
}
</script>
