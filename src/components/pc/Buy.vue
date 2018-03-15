<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
      <router-view name="addressPreviewLists" />
      <router-view name="ordersPreview" />
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
          <el-button type="primary" :loading="isLoading" :disabled="!defaultAddress" @click="handleOrdersAddAction(cartLists)" style="width: 300px;">提交订单，去支付</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="p text-right">
          点击提交订单表示您同意<el-button type="text">ABOO 商城的销售政策</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('orders')
export default {
  name: 'Buy',
  computed: {
    ...mapState({
      isLoading: 'isLoading',
      cartLists: state => state.cart.cartLists,
      defaultAddress: state => state.address.defaultAddress
    })
  },
  methods: {
    ...mapActions(['handleOrdersAddAction'])
  }
}
</script>
