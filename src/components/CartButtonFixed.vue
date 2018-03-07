<template>
  <el-container class="cart-button-fixed">
    <el-row type="flex" justify="end" align="middle" :gutter="20">
      <el-col :xs="0" :sm="22" :md="22" :lg="22" :xl="22" v-if="total" class="text-right">
        总计：{{total}}
      </el-col>
      <el-col :xs="18" :sm="0" :md="0" :lg="0" :xl="0" v-if="total">
        总计：{{total}}
      </el-col>
      <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3">
        <el-button type="primary" @click="handleClickCartAdd(currentGoods)" :disabled="isCurrentGoods">加入购物车</el-button>
      </el-col>
      <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0">
        <el-button size="small" type="primary" @click="handleClickCartAdd(currentGoods)" :disabled="isCurrentGoods">加入购物车</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
// 引入购物车基础组件
import CartBase from './CartBase'
export default {
  name: 'CartButtonFixed',
  props: ['currentGoods', 'number'],
  extends: CartBase,
  computed: {
    isCurrentGoods () {
      if (!this.currentGoods) return true
      return false
    },
    total () {
      if (this.currentGoods) {
        let total = (this.currentGoods.Price * this.number)
        return `￥${Number.parseFloat(total).toFixed(2)}`
      }
      return null
    }
  }
}
</script>
