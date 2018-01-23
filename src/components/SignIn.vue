<template>
  <el-row>
    <el-container>
      <el-row>
        <el-col :span="18">可以放图片</el-col>
        <el-col :span="6">
          <el-form labelPosition="top" label-width="80px" :model="formLabelAlign">
            <el-form-item label="用户名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-container>
  </el-row>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    submitForm () {},
    resetForm () {}
  }
}
</script>
