<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom text-center" style="height: 60px">
    <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="pointer">
          <router-link to="/">
            ABOO商城
          </router-link>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0">
      <el-button type="text" @click="isDialog = !isDialog">按钮</el-button>
    </el-col>
    <el-col :xs="12" :sm="0" :md="0" :lg="0" :xl="0" class="h3 gray">
      <router-link :to="{ name: 'mobileIndex' }">
        <div>ABOO商城</div>
      </router-link>
    </el-col>
    <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0">
      <router-link :to="{ name: 'cartMobile' }">
        <el-badge :value="cartListsTotal.totalNumbar" class="item" v-if="cartListsTotal">
          <el-button type="text">购物车</el-button>
        </el-badge>
        <el-button type="text" v-else>购物车</el-button>
      </router-link>
    </el-col>
    <NavigationBarStoreDialog :isDialogOuter.sync="isDialog" @close="isDialog = false" />
  </el-row>
</template>
<script>
import NavigationBarStoreDialog from 'components/mobile/NavigationBarStoreDialog.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')
export default {
  name: 'NavigationBarResultPage',
  components: {
    NavigationBarStoreDialog
  },
  data () {
    return {
      isDialog: false
    }
  },
  computed: {
    ...mapGetters(['cartListsTotal'])
  }
}
</script>
