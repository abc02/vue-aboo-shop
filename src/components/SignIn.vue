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
      <el-input v-model="formData.phone" autofocus required type="text" placeholder="手机"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.password" @keyup.native.enter="PhoneLoginAccount" required type="password" placeholder="密码"></el-input>
      <a class="switch-password-get" href="javascript:void(0);" @click.prevent="handleClickSignStatus('3', '找回密码')">忘记密码？</a>
    </el-form-item>
    <el-form-item>
      <el-button  class="width-100" type="primary" @click="handleClickPhoneSignIn(formData)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import SignBase from './SignBase'
export default {
  name: 'SignIn',
  extends: SignBase,
  data () {
    return {
      formData: {
        phone: '',
        password: ''
      }
    }
  }
}
</script>
