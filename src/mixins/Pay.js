export default {
  methods: {
    handleAsyncPay (formData) {
      if (typeof BC === 'undefined') {
        if (document.addEventListener) {
          document.addEventListener('beecloud:onready', this.handleBcPay.call(null, formData), false)
        } else if (document.attachEvent) {
          document.attachEvent('beecloud:onready', this.handleBcPay.call(null, formData))
        }
      } else {
        this.handleBcPay.call(null, formData)
      }
    },
    handleBcPay (formData) {
      let {title, amount, orderId, sign} = formData
      BC.click({
        'title': title,
        'amount': Number.parseInt(amount),
        'out_trade_no': orderId, // 唯一订单号
        'sign': sign
      })
      BC.err = data => {
        alert(data['ERROR'])
      }
    }
  }
}
