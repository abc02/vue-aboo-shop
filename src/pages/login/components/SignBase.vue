<script>
import Vue from 'vue'
import VueSessionStorage from 'vue-sessionstorage'
import qs from 'qs'
//  服务层
import SignServices from 'modules/service/SignServices'
// 验证码组件
import SignCode from './SignCode'
Vue.use(VueSessionStorage)
export default {
  name: 'LogInBase',
  components: {
    'sign-code': SignCode
  },
  methods: {
    handleClickSignStatus (status, text) {
      this.$emit('on-handle-click-sign-status', status, text)
    },
    handleClickPhoneSignIn (formData) {
      SignServices.PhoneLoginAccount(formData).then(res => {
        if (res.data.ret === 1001) {
          let userInfoString = qs.stringify(res.data)
          this.$session.set('userInfo', userInfoString)
          location.href = 'user.html'
        }
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    handleClickPhoneSignUp (formData) {
      SignServices.PhoneRegisterAccount(formData).then(res => {
        if (res.data.ret === 1001) return this.$message.success(res.data.code)
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    handleClickPhoneForgot (formData) {
      SignServices.PhonePasswordGet(formData).then(res => {
        if (res.data.ret === 1001) return this.$message.success(res.data.code)
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    handleClickSendSms (formData, style) {
      let {phone} = formData
      if (!phone) return this.$message.error('手机号码不能为空')
      SignServices.SendSms({phone, style}).then(res => {
        if (res.data.ret === 1001) {
          this.$message.success(res.data.code)
          if (style === 2) return this.onCb(60)
          if (style === 3) return this.onCb(60)
        }
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    onCb (second) {
      this.$refs.signcode.cb(second)
    }
  }
}
</script>
