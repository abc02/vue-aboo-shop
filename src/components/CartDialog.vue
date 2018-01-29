<template>
  <el-dialog
  title="提示"
  :visible="cartStatus === 2"
  width="30%">
  <span>商品已经加入购物车</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="handleClickCartStatus(1)">继续购物</el-button>
    <el-button type="primary" @click="handleClickRedirectCart">查看购物车</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  name: 'CartDialog',
  props: ['cartStatus'],
  methods: {
    handleClickCartStatus (status) {
      this.$emit('on-handle-click-cart-status', status)
    },
    handleClickRedirectCart () {
      this.$emit('on-handle-click-redirect-cart')
    }
  }
}
</script>
