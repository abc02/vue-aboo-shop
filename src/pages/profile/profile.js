import Vue from 'vue'
import Base from 'mixins/Base'

window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  data: {
    profileIndex: '1',
    profileText: '我的账号'
  },
  methods: {
    handleSelect (index, indexPath, e) {
      this.profileIndex = index
      this.profileText = e.$el.innerText
    }
  }
})
