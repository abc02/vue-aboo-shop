export default {
  methods: {
    redirectToIndex (index) {
      location.href = 'index.html'
    },
    redirectToHelp (index) {
      location.href = 'help.html'
    },
    redirectToProduct (index) {
      location.href = 'product.html?goodsId=1'
    },
    redirectToProfile (index) {
      location.href = 'profile.html'
    }
  }
}
