<style lang="scss" scoped>
.el-form-item{
  position: relative;
  .switch-password-get {
    position: absolute;
    top:0;
    right:12px;
  }
}
</style>

<template>
  <el-form :model="formData">
    <el-form-item>
      <el-input v-model="formData.phone" required type="text" placeholder="手机"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.password" required type="password" placeholder="密码"></el-input>
      <a class="switch-password-get" href="javascript:void(0);" @click="switchLogIn('3', '找回密码')">忘记密码？</a>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="PhoneLoginAccount">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import LogIn from 'mixins/LogIn'
export default {
  name: 'PhoneLoginAccount',
  mixins: [LogIn],
  data () {
    return {
      formData: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    switchLogIn (index, text) {
      this.$emit('on-switch-log-in', index, text)
    },
    PhoneLoginAccount () {
      this.$emit('on-phone-log-in-account', this.formData)
    }
  }
}
</script>
