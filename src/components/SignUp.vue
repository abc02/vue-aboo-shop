<style scoped>
.el-form-item{
  position: relative;
}
</style>
<template>
 <el-form labelPosition="top" label-width="80px" :model="formData">
    <el-form-item>
      <el-input v-model="formData.phone" autofocus type="text" placeholder="手机"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.code" type="text" placeholder="验证码"></el-input>
      <sign-code @on-handle-click-send-sms="handleClickSendSms(formData, 2)" ref="signcode"/>
    </el-form-item>
     <el-form-item>
      <el-input v-model="formData.password" @keyup.native.enter="PhoneRegisterAccount" type="password" placeholder="新密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleClickPhoneSignUp(formData)">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import SignBase from './SignBase'
export default {
  name: 'SignUp',
  extends: SignBase,
  data () {
    return {
      formData: {
        phone: '',
        code: '',
        password: ''
      }
    }
  }
}
</script>
