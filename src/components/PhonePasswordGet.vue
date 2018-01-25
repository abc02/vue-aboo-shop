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
      <VCode @on-send-sms="SendSms" :styleCode="3" ref="vcode"/>
    </el-form-item>
     <el-form-item>
      <el-input v-model="formData.password" @keyup.native.enter="PhoneRegisterAccount" type="password" placeholder="新密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="PhoneRegisterAccount">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import LogIn from 'mixins/LogIn'
export default {
  name: 'PhonePasswordGet',
  mixins: [LogIn],
  data () {
    return {
      formData: {
        phone: '',
        code: '',
        password: ''
      }
    }
  },
  methods: {
    PhoneRegisterAccount (formData) {
      this.$emit('on-phone-register-account', this.formData)
    }
  }
}

</script>
