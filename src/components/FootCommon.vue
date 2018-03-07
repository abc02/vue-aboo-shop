<template>
  <el-row type="flex" justify="center" align="middle" class="height-100 pt20 pb20" :style="FootStyle">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="top">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-container direction="vertical" class="text-center">
            <el-row type="flex" justify="start" align="middle" class="mb20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h4>服务支持</h4>
              </el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <a href="javascirept:void(0);">售后服务</a>
              </el-col>
            </el-row>
          </el-container>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-container direction="vertical" class="text-center">
            <el-row type="flex" justify="start" align="middle" class="mb20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h2>全国服务热线</h2>
              </el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="mb20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h1>0577-88789089</h1>
              </el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="mb20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                周一到周五9:00-17:00
              </el-col>
            </el-row>
          </el-container>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'FootCommon',
  props: ['FootStyle']
}
</script>
