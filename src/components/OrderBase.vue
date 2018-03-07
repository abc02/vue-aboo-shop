<script>
export default {
  name: 'OrderBase',
  // 1：未付款2：待发货3：待收货4：已完成5：申请退款
  // 6：通过审核等待填单7：驳回8：等待商家收货9：退货成功10：交易关闭
  methods: {
    handleOrderStatusArrayText (orderLists) {
      if (Array.isArray(orderLists)) {
        let arr = []
        orderLists.slice(0).map(order => {
          arr.push(this.handleOrderStatusTextButton(order))
        })
        return arr
      } else {
        return this.handleOrderStatusTextButton(orderLists)
      }
    },
    // 订单总状态
    handleOrderStatusTextButton (order) {
      switch (order.Status) {
        case 1:
          return {
            text: '待支付',
            button: '继续支付'
          }
        case 2:
          return {
            text: '待发货',
            button: null
          }
        case 3:
          return {
            text: '待收货',
            button: null
          }
        case 4:
          return {
            text: '已完成',
            button: null
          }
        case 5:
          return {
            text: '申请退款',
            button: null
          }
        case 6:
          return {
            text: '通过审核等待填单',
            button: null
          }
        case 7:
          return {
            text: '驳回',
            button: null
          }
        case 8:
          return {
            text: '等待商家收货',
            button: null
          }
        case 9:
          return {
            text: '退货成功',
            button: null
          }
        case 10:
          return {
            text: '交易关闭',
            button: null
          }
      }
    },
    handleOrderCreateTimeText (date) {
      let YYYYMMDD = this.handleToYYYYMMDD(new Date(date))
      let HHMMSSMS = this.handleToHHMMSSMS(new Date(date))
      return `${YYYYMMDD.YYYY}-${this.handleToPad(YYYYMMDD.MM)}-${this.handleToPad(YYYYMMDD.DD)} ${this.handleToPad(HHMMSSMS.HH)}:${this.handleToPad(HHMMSSMS.MM)}:${this.handleToPad(HHMMSSMS.SS)}`
    },
    handleToYYYYMMDD (date) {
      let Year, Month, Day
      Year = date.getFullYear()
      Month = date.getMonth() + 1
      Day = date.getDate()
      return {
        YYYY: Year,
        MM: Month,
        DD: Day
      }
    },
    handleToHHMMSSMS (date) {
      let Hours, Minutes, Seconds, Milliseconds
      Hours = date.getHours()
      Minutes = date.getMinutes()
      Seconds = date.getSeconds()
      Milliseconds = date.getMilliseconds()
      return {
        HH: Hours,
        MM: Minutes,
        SS: Seconds,
        MS: Milliseconds
      }
    },
    handleToPad (num, n = 2) {
      if ((num + '').length >= n) return num
      return this.handleToPad('0' + num, n)
    },
    handleClickRedirectPage (page, param) {
      this.$emit('on-handle-click-redirect-page', page, param)
    },
    handleClickOrderAdd (goods, mailAddress) {
      this.$emit('on-handle-click-order-add', goods, mailAddress)
    },
    generateGetOrderLists (limit) {
      this.$emit('on-handle-get-order-lists', limit)
    },
    generateGetOrderDetail (orderId) {
      this.$emit('on-handle-get-order-detail', orderId)
    },
    handleClickOrderStatus (status, orderId) {
      this.$emit('on-handle-click-order-status', status, orderId)
    },
    handleBcPay (order) {
      this.$emit('on-handle-bc-pay', order)
    }
  }
}
</script>
