<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
      <keep-alive>
        <router-view name="addressPreviewLists" />
      </keep-alive>
      <keep-alive>
        <router-view name="ordersPreview" />
      </keep-alive>
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="24" class="text-right">
          <el-button type="primary" :loading="isLoading" :disabled="!addressDefault" @click="handleOrdersAddAction({cartLists, addressDefault})" style="width: 300px;">提交订单，去支付</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="24" class="p text-right">
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
      addressDefault: state => state.address.addressDefault,
      cartLists: state => state.cart.cartLists
    })
  },
  methods: {
    ...mapActions(['handleOrdersAddAction'])
  }
}
</script>
