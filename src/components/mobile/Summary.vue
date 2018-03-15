<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="middle">
      <el-col :span="24" class="pt10 pb10 pl10 pr10 p bg-gray">提交订单</el-col>
    </el-row>
    <el-container direction="vertical" class="border-bottom bg-white pt20 pb20" v-if="addressDefault">
      <el-row type="flex" justify="start" align="middle" class="mb20">
        <el-col :span="24" class="pl20"><i class="el-icon-info"></i> 配送地址</el-col>
      </el-row>
      <router-link :to="{ name: 'address'}">
        <el-row type="flex" justify="start" align="middle" class="pb10 pt10 pl10 pr10">
          <el-col :span="12">
            {{addressDefault.nickName}}
          </el-col>
          <el-col :span="12" class="text-right">
            {{addressDefault.phone}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" >
          <el-col :span="24" class="pb10 pt10 pl10 pr10 relative">
            {{addressDefault.addressLonger}}<i class="el-icon-arrow-right absolute-middle-right"></i>
          </el-col>
        </el-row>
      </router-link>
    </el-container>
    <el-container direction="vertical" class="border-bottom bg-white pt20" v-if="addressDefault">
      <el-row type="flex" justify="start" align="middle" class="pb20 pl10 pr10">
        <el-col :span="20" class=""><i class="el-icon-info"></i>  订单信息</el-col>
        <router-link :to="{ name: 'cartMobile'}">
          <el-col :span="4" class="text-right">
              <el-button type="text" class="padding-0">编辑购物车</el-button>
          </el-col>
        </router-link>
      </el-row>
      <el-row type="flex" justify="start" align="middle" v-for="(cart, index) in cartLists" :key="index" class="border-bottom boder-botton-last-none pt10 pb20 pl20 pr10">
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <img :src="cart.img" :alt="cart.goodsName">
        </el-col>
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="h2 pl10">
          {{cart.goodsName}}
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <el-row type="flex" justify="start" align="middle" class="pb10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3 text-right">
              {{`￥${Number.parseFloat(cart.price).toFixed(2)}`}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="p text-right">
              {{`数量:${cart.number}`}}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
    <el-row type="flex" justify="start" align="middle" class="bg-white pt20">
      <el-col :span="24">
        <el-row type="flex" justify="start" align="middle" class="border-bottom mb10 pb10 pt10 pl10 pr10">
          <el-col :span="12">运费：</el-col>
          <el-col :span="12" class="p text-right">包邮</el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" class="pb10 pt10 pl10 pr10">
          <el-col :span="12" class="h3">应付总金额:</el-col>
          <el-col :span="12" class="text-right">
            <el-button type="text" class="h1 padding-0">{{cartListsTotal.totalPrice}}</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :span="24" class="p mb20 pl10 pr10">
        <el-checkbox :value="true"> <span class="p">提交订单即表示您同意</span> <el-button type="text">ABOO 商城的销售政策</el-button></el-checkbox>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :span="24" class="h1">
        <el-button type="primary" :loading="isLoading" class="width-100 pt20 pb20" @click="handleOrdersAddAction(cartLists)">提交订单，去支付</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Summary',
  computed: {
    ...mapState({
      isLoading: 'isLoading',
      addressDefault: state => state.address.addressDefault,
      cartLists: state => state.cart.cartLists
    }),
    ...mapGetters({
      cartListsTotal: 'cart/cartListsTotal'
    })
  },
  methods: {
    ...mapActions({
      generateAddressDefaultAction: 'address/generateAddressDefaultAction',
      generateCartListsAction: 'cart/generateCartListsAction',
      handleOrdersAddAction: 'orders/handleOrdersAddAction'
    })
  },
  activated () {
    console.log('activated ')
    if (!this.addressDefault) {
      this.generateAddressDefaultAction()
    }
    if (!this.cartLists) {
      this.generateCartListsAction()
    }
  }
  // created () {
  //   if (!this.addressDefault) {
  //     this.generateAddressDefaultAction()
  //   }
  //   if (!this.cartLists) {
  //     this.generateCartListsAction()
  //   }
  // }
}
</script>
