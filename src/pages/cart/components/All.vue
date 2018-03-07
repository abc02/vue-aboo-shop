<template>
  <el-container direction="vertical" class="min-heigth" v-loading="isLoading">
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="h1 mt20 pb20 mb20">我的购物车</el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="pl10 pr10">
      <el-col :xs="12" :sm="0" :md="0" :lg="0" :xl="0">
        <el-button type="text" icon="el-icon-arrow-left" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
      </el-col>
      <el-col :xs="12" :sm="0" :md="0" :lg="0" :xl="0" class="text-right p" v-show="cartListsTotal">
        <el-button type="text" class="p gray" @click="handleEdit">{{editText}}</el-button>
      </el-col>
    </el-row>
    <el-container direction="vertical" v-if="cartListsTotal">
      <List />
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="text-right mb20">
          <span class="mr20">总计:</span><el-button type="text">{{cartListsTotal.totalPrice}}</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
          <el-button type="primary" plain class="pr20 pl20" icon="el-icon-arrow-left" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
          <el-button type="primary" class="pr20 pl20" @click="handleClickRedirectPage('buy')">去结算<i class="el-icon-arrow-right"></i></el-button>
        </el-col>
      </el-row>
    </el-container>
    <el-container direction="vertical" v-else>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="pt20 pb20 h3 gray text-center">购物车为空</el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="bg-white">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="pt20 pb20 h3 gray text-center">购物车为空</el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle" class="bg-white ">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="pt20 pb20 text-center">
          <el-button type="primary" size="medium" class="pt10 pb10 pl20 pr20" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
        </el-col>
      </el-row>
    </el-container>
    <el-row type="flex" justify="start" align="middle" class="bottom-fixed pl10 pr10" v-if="cartListsTotal">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <el-row type="flex" justify="start" align="middle" class="mt10 mb10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="p">
            {{`${cartListsTotal.totalNumbar}个商品`}}
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="text-right">
            {{cartListsTotal.totalPrice}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" class="mt10 mb20">
          <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <el-button type="primary" class="width-100 pt10 pb10" @click="handleClickRedirectPage('buy')">去结算</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="bottom-fixed" v-else>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <el-button type="primary" class="width-100 pt20 pb20">继续购物</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import CommonBase from 'mixins/CommonBase'
import List from './List.vue'
import { mapState, createNamespacedHelpers } from 'vuex'
const { mapGetters, mapMutations, mapActions } = createNamespacedHelpers('cart')
export default {
  name: 'All',
  mixins: [CommonBase],
  components: {
    List
  },
  computed: {
    ...mapState({
      isLoading: 'isLoading',
      editText: state => state.cart.editText
    }),
    ...mapGetters(['cartListsTotal'])
  },
  methods: {
    ...mapMutations(['handleEdit']),
    ...mapActions(['generateCartListsAction', 'handleCartDeleteAction'])
  },
  created () {
    this.generateCartListsAction()
  }
}
</script>
