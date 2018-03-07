<template>
  <el-container>
      <el-header>
         <router-view name="header" />
      </el-header>
      <el-main class="padding-0">
        <router-view />
      </el-main>
      <el-footer height="auto" class="padding-0">
        <router-view name="footer" />
      </el-footer>
    </el-container>
</template>
<script>
export default {
  name: 'Index'
}
</script>
