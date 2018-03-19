<template>
  <el-row type="flex" justify="center" align="top">
    <el-col :span="20">
      <el-container class="mt20 pb20">
        <el-aside>
           <router-view name="navigationBarLeft" class="min-heigth " />
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
