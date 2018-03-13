<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <router-view name="select" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Address'
}
</script>
