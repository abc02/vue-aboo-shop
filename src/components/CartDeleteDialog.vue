<template>
  <el-dialog
  :visible="cartStatus === 2"
  width="80%"
  center
  :show-close="false">
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h1 text-center">
      <i class="el-icon-warning"></i>
    </el-col>
  </el-row>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h2 text-center">
      将删除该商品, 是否继续？
    </el-col>
  </el-row>
  <span slot="footer">
    <el-row>
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" >
        <el-button @click="handleClickCartStatus(1)">取消</el-button>
        <el-button type="primary" @click="handleClickCartDelete(cartKey)">确认</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <el-button class="width-100" @click="handleClickCartStatus(1)">取消</el-button>
      </el-col>
    </el-row>
     <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <el-button class="width-100" type="primary" @click="handleClickCartDelete(cartKey)">确认</el-button>
      </el-col>
    </el-row>
  </span>
</el-dialog>
</template>

<script>
import CartBase from './CartBase'
export default {
  name: 'CartDeleteDialog',
  props: ['cartStatus', 'cartKey'],
  extends: CartBase
}
</script>
