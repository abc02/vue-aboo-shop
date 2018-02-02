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
      <sign-code @on-handle-click-send-sms="handleClickSendSms(formData, 3)" ref="signcode"/>
    </el-form-item>
     <el-form-item>
      <el-input v-model="formData.password" @keyup.native.enter="handleClickPhoneForgot(formData)" type="password" placeholder="新密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="width-100" type="primary" @click="handleClickPhoneForgot(formData)">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import SingBase from './SignBase'
export default {
  name: 'SignForgot',
  extends: SingBase,
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
