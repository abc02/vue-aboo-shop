<template>
  <el-container class="cart-button-fixed">
    <el-row type="flex" justify="end" align="middle">
      <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" v-if="total">
        总计：{{total}}
      </el-col>
      <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0" v-if="total">
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
import CartBase from './CartBase'
export default {
  name: 'CartButtonFixedBuy'
  
}
</script>