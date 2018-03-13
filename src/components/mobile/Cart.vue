<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <el-row type="flex" justify="start" align="middle">
          <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="h1 mt20 mb20 gray">我的购物车</el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle">
          <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="pl10 pr10 relative bg-gray">
            <router-link :to="{ name: 'store' }">
              <el-button type="text" icon="el-icon-arrow-left">继续购物</el-button>
            </router-link>
            <el-button type="text" class="button-right p gray" v-show="cartListsTotal" @click="handleEdit">{{editText}}</el-button>
          </el-col>
        </el-row>
        <el-container direction="vertical" v-if="cartListsTotal">
          <CartForm />
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="text-right mb20">
              <span class="mr20">总计:</span><el-button type="text">{{cartListsTotal.totalPrice}}</el-button>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
              <router-link :to="{ name: 'store' }">
                <el-button plain class="pr20 pl20 mr20" icon="el-icon-arrow-left">继续购物</el-button>
              </router-link>
              <router-link :to="{ name: 'checkout' }">
                <el-button type="primary" class="pr20 pl20">去结算<i class="el-icon-arrow-right"></i></el-button>
              </router-link>
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
              <router-link :to="{ name: 'store' }">
                <el-button size="medium" class="pt10 pb10 pl20 pr20">继续购物</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-container>
        <el-container direction="vertical">
          <el-row type="flex" justify="start" align="middle" class="bottom-fixed pl10 pr10" v-if="cartListsTotal" style="z-index: 999;">
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
                  <router-link :to="{ name: 'summary' }">
                    <el-button type="primary" class="width-100 pt10 pb10">去结算</el-button>
                  </router-link>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="bottom-fixed"  v-else>
            <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
              <router-link :to="{ name: 'store' }">
                <el-button type="primary" class="width-100 pt20 pb20">继续购物</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import CartForm from './CartForm.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('cart')
export default {
  name: 'Cart',
  components: {
    CartForm
  },
  computed: {
    ...mapState(['editText']),
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
