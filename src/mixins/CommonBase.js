import Common from 'modules/service/CommonServices.js'
export default {
  methods: {
    handleClickRedirectPage (page, param) {
      Common.handleRedirectPage(page, param)
    },
    handleClickSessionStorageUserInfoOut (page, param) {
      Common.handleSessionStorageUserInfoOut(page, param)
    },
    handleClickBcPay (data, type) {
      if (type) {
        data.instant_channel = type
      }
      Common.handlePay(data)
    }
  }
}
