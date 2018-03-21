<template>
  <mu-appbar>
    <mu-icon-button icon="menu" slot="left" @click="toggle()" />
    <mu-drawer width="50%" :open="isOpen" :docked="false" @close="toggle()">
      <mu-list>
        <mu-list-item title="我的账号" exact :to="{ name: 'userMobile' }"  v-if="userInfo">
          <mu-icon slot="right" value="arrow_right"/>
        </mu-list-item>
        <mu-list-item title="登录" exact :to="{ name: 'login' }" v-else>
          <mu-icon slot="right" value="arrow_right"/>
        </mu-list-item>
        <mu-sub-header>商品分类</mu-sub-header>
        <mu-divider/>
        <mu-list-item title="智慧鞋垫" exact :to="{ name: 'productMobile', params: { goodsId: 7 } }">
          <mu-icon slot="right" value="arrow_right"/>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <div class="text-center">
      <router-link :to="{ name: 'mobile' }" slot="default">ABOO商城</router-link>
    </div>
    <router-link :to="{ name: 'cartMobile' }" slot="right">
      <mu-badge :content="String(cartListsTotal.totalNumbar)" secondary v-if="cartListsTotal">
        <mu-icon-button icon="shopping_cart"/>
      </mu-badge>
        <mu-icon-button icon="shopping_cart" v-else />
    </router-link>
  </mu-appbar>
</template>
<script>
import { mapState, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')
export default {
  name: 'NavigationBarMobileHeader',
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.isOpen = false
    }
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(['cartListsTotal'])
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
    // ...mapMutations(['generateUserInfoMutation'])
  }
  // created () {
  //   this.generateUserInfoMutation()
  // }
}
</script>
