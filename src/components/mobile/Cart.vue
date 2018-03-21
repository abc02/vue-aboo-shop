<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="middle">
      <el-col :span="24" class="pl10 pr10 relative bg-gray">
        <router-link :to="{ name: 'mobile' }">
          <el-button type="text" icon="el-icon-arrow-left">继续购物</el-button>
        </router-link>
        <el-button type="text" class="button-right p gray" v-show="cartListsTotal" @click="handleEdit">{{editText}}</el-button>
      </el-col>
    </el-row>
    <CartForm v-if="cartListsTotal" />
    <el-row type="flex" justify="start" align="middle" v-else>
      <el-col :span="24" class="pt20 pb20 h3 gray text-center">购物车为空</el-col>
    </el-row>
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
        <router-link :to="{ name: 'mobile' }">
          <el-button type="primary" class="width-100 pt20 pb20">继续购物</el-button>
        </router-link>
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
  activated () {
    console.log('activated')
    this.generateCartListsAction()
  },
  deactivated () {
    console.log('deactivated ')
  }
}
</script>
