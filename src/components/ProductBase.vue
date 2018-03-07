<script>
export default {
  name: 'ProductBase',
  methods: {
    // handleClickOrderAdd (currentGoods) {
    //   this.$emit('on-handle-click-cart-add', currentGoods)
    // },
    handleClickCartAdd (currentGoods) {
      this.$emit('on-handle-click-cart-add', currentGoods)
    },
    handleChangeGoodsNumber (newValue) {
      this.$emit('on-handle-change-goods-number', newValue)
    }
  }
}
</script>
