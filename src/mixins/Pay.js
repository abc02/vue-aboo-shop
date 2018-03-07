export default {
  // methods: {
  //   handleBcPay (formData) {
  //     let returnUrl, amount, orderId, sign, title
  //     if (process.env.NODE_ENV === 'production') {
  //       returnUrl = 'https://abupao.com/result.html'
  //     } else {
  //       returnUrl = 'http://localhost:8090/result.html'
  //     }
  //     formData.amount ? amount = formData.amount : amount = String(formData.Price * 100)
  //     formData.orderId ? orderId = formData.orderId : orderId = formData.OrderId
  //     formData.sign ? sign = formData.sign : sign = formData.Sign
  //     formData.title ? title = formData.title : title = '阿布跑跑商品购买'
  //     // let {amount, orderId, sign, title} = formData
  //     BC.err = (data) => {
  //       // 注册错误信息接受
  //       alert(data['ERROR'])
  //     }
  //     /**
  //      * 需要支付时调用BC.click接口传入参数
  //      */
  //     BC.click({
  //       title, // 商品名
  //       amount, // 总价（分）
  //       out_trade_no: orderId, // 自定义订单号
  //       sign, // 商品信息hash值，含义和生成方式见下文
  //       return_url: returnUrl // 支付成功后跳转的商户页面,可选，默认为http://payservice.beecloud.cn/spay/result.php
  //     })
  //   }
  // }
}
