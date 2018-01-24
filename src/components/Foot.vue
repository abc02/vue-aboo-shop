<template>
  <el-row type="flex" align="middle" style="height:100%">
    <el-col :span="12" :offset="3">
      <el-row>
        <el-col>
          <h4>服务支持</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col >
        <a href="javascirept:void(0);" @click.prevent="redirectToHelp">售后服务</a>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="12" :offset="3">
      <el-row>
        <el-col>
          <h2>全国服务热线</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <h1>0577-88789089</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          周一到周五9:00-17:00
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Base from 'mixins/Base'
export default {
  name: 'Foot',
  mixins: [Base]
}

</script>
