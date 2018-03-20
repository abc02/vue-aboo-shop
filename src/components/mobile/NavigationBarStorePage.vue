<template>
  <mu-appbar class="text-center">
    <mu-icon-button icon="menu" slot="left" @click="toggle()" />
    <mu-drawer width="50%" :open="isOpen" :docked="false" @close="toggle()">
      <mu-list>
        <mu-list-item title="我的账号" exact :to="{ name: 'userMobile' }"  v-if="userInfo">
          <mu-icon slot="right" value="arrow_right"/>
        </mu-list-item>
        <mu-list-item title="登录" exact :to="{ name: 'login' }" v-else>
          <mu-icon slot="right" value="arrow_right"/>
        </mu-list-item>
        <mu-list-item title="商品分类" />
        <mu-divider/>
        <mu-list-item title="智慧鞋垫" exact to="/mobile/product/7" />
      </mu-list>
    </mu-drawer>
    <router-link :to="{ name: 'mobileIndex' }" slot="default">ABOO商城</router-link>
    <router-link :to="{ name: 'cartMobile' }" slot="right">
      <mu-badge :content="cartListsTotal.totalNumbar" secondary v-if="cartListsTotal">
        <mu-icon-button icon="store"/>
      </mu-badge>
        <mu-icon-button icon="shopping_cart" v-else />
    </router-link>
  </mu-appbar>
</template>
<script>
import { mapState, mapMutations, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')
export default {
  name: 'NavigationBarStorePage',
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
    },
    ...mapMutations(['generateUserInfoMutation'])
  },
  created () {
    this.generateUserInfoMutation()
  }
}
</script>
