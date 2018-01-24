export default {
  methods: {
    SendSms (style) {

    },
    PhoneLoginAccount () {

    },
    PhoneRegisterAccount () {
    },
    PhonePasswordGet () {

    },
    switchPasswordGet (index) {
      this.$emit('switch-password-get', index)
    },
    switchRegisterAccount (index) {
      this.$emit('switch-register-account', index)
    }
  }
}
