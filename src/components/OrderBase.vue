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
          arr.push(this.handleOrderStatusText(order))
        })
        return arr
      } else {
        return this.handleOrderStatusText(orderLists)
      }
    },
    handleOrderStatusText (order) {
      switch (order.Status) {
        case 1:
          return '待支付'
        case 2:
          return '待发货'
        case 3:
          return '待收货'
        case 4:
          return '已完成'
        case 5:
          return '申请退款'
        case 6:
          return '通过审核等待填单'
        case 7:
          return '驳回'
        case 8:
          return '等待商家收货'
        case 9:
          return '退货成功'
        case 10:
          return '交易关闭'
      }
    },
    handleOrderCreateTimeText (date) {
      let YYYYMMDD = this.handleToYYYYMMDD(new Date(date))
      let HHMMSSMS = this.handleToHHMMSSMS(new Date(date))
      return `${YYYYMMDD.YYYY}-${this.handleToPad(YYYYMMDD.MM)}-${this.handleToPad(YYYYMMDD.DD)} ${this.handleToPad(HHMMSSMS.HH)}:${this.handleToPad(HHMMSSMS.MM)}${this.handleToPad(HHMMSSMS.SS)}`
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
    }
  }
}
</script>
