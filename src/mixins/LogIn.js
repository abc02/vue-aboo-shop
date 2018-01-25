import VCode from 'components/VCode'
export default {
  components: {
    VCode
  },
  methods: {
    SendSms (style) {
      if (!this.formData.phone) return this.$message.error('手机号码不能为空')
      let formData = {
        phone: this.formData.phone,
        style: style
      }
      this.$emit('on-send-sms', formData)
    },
    onCb (second) {
      this.$refs.vcode.cb(second)
    }
  }
}
