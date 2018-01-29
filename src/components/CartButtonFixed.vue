<template>
  <el-container class="wraper">
      <el-row type="flex" justify="end" align="middle">
        <el-col :span="2" v-if="total">
          总计：{{total}}
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="handleClickCartAdd" :disabled="isCurrentGoods">加入购物车</el-button>
        </el-col>
      </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'CartButtonFixed',
  props: ['total', 'currentGoods'],
  computed: {
    isCurrentGoods () {
      if (!this.currentGoods) return true
      return false
    }
  },
  methods: {
    handleClickCartAdd () {
      this.$emit('on-handle-click-cart-add', this.currentGoods)
    }
  }
}
</script>
