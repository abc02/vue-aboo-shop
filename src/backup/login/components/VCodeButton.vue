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
  <el-button type="primary" size="small" @click="handlePhoneSendSmsAction({phone, style: type})" :disabled="isWaiting">{{btnText}}</el-button>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('login')
export default {
  name: 'VCode',
  props: ['phone', 'type'],
  computed: {
    isWaiting () {
      return this.waitSecond > 0
    },
    btnText () {
      return this.isWaiting > 0 ? `请等待${this.waitSecond}秒` : '获取验证码'
    },
    ...mapState(['waitSecond'])
  },
  methods: {
    ...mapMutations(['handleWaitSecondMutation']),
    ...mapActions(['handlePhoneSendSmsAction'])
  }
}
</script>
