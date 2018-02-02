<style scoped>
  .el-button {
    position: absolute;
    top:50%;
    right: 6px;
    transform: translateY(-50%);
    width: 100px;
  }
</style>

<template>
  <el-button type="primary" size="small" @click="onCodeClick" :disabled="isWaiting">{{btnText}}</el-button>
</template>
<script>
export default {
  name: 'VCode',
  data () {
    return {
      waitSecond: {},
      intervalId: null
    }
  },
  computed: {
    isWaiting () {
      return this.waitSecond > 0
    },
    btnText () {
      return this.isWaiting > 0 ? `请等待${this.waitSecond}秒` : '获取验证码'
    }
  },
  methods: {
    cb (second) {
      if (this.isWaiting) {
        return
      }
      this.waitSecond = second
      this.intervalId = setInterval(() => {
        this.waitSecond--
        if (this.waitSecond === 0) {
          clearInterval(this.intervalId)
          this.intervalId = null
        }
      }, 1000)
    },
    /**
     * 传递点击事件
     */
    onCodeClick () {
      if (this.isWaiting) {
        return
      }
      this.$emit('on-handle-click-send-sms')
    }
  }
}
</script>
