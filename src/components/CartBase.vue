<script>
export default {
  name: 'CartBase',
  methods: {
    handleClickCartStatus (status, cartKey) {
      this.$emit('on-handle-click-cart-status', status, cartKey)
    },
    handleClickCartAdd (formData) {
      this.$emit('on-handle-click-cart-add', formData)
    },
    handleClickCartDelete (key) {
      this.$emit('on-handle-click-cart-delete', key)
    },
    handleClickRedirectPage (page, param) {
      this.$emit('on-handle-click-redirect-page', page, param)
    }
  }
}
</script>
