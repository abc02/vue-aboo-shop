<style lang="scss" scoped>
.el-form-item{
  position: relative;
  .send-sms {
    position: absolute;
    top:0;
    right:12px;
  }
}
</style>
<template>
 <el-form labelPosition="top" label-width="80px" :model="formData">
    <el-form-item>
      <el-input v-model="formData.phone" type="text" placeholder="手机"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.code" type="text" placeholder="验证码"></el-input>
      <a class="send-sms" href="javascirpt:void(0)" @click.prevent="SendSms('2')">发送验证码</a>
    </el-form-item>
     <el-form-item>
      <el-input v-model="formData.passwrod" type="password" placeholder="新密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="PhoneRegisterAccount">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'PhoneRegisterAccount',
  data () {
    return {
      formData: {
        user: '',
        code: '',
        passwrod: ''
      }
    }
  },
  methods: {
    SendSms (style) {
      this.$emit('on-send-sms', style)
    },
    PhoneRegisterAccount (formData) {
      this.$emit('on-phone-register-account', formData)
    }
  }
}
</script>
