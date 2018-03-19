<template>
  <el-dialog
    center
    :visible.sync="isDialogInner"
    top="60px"
    width="100vw"
    :modal="false"
    :show-close="false"
    :fullscreen="false">
    <el-row type="flex" justify="start" align="middle" class="border-bottom pt20 pb20 pl20 pr10 mr20 ml20" >
      <el-col :xs="24" class="realtive" v-if="userInfo">
        <router-link :to="{ name: 'userMobile' }" class="width-100 block">我的账号 <i class="el-icon-arrow-right absolute-middle-right"></i></router-link>
      </el-col>
      <el-col :xs="24" class="relative" v-else>
        <router-link :to="{ name: 'login' }" class="width-100 block">登录<i class="absolute-middle-right el-icon-arrow-right"></i></router-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10 pl20 pr10 mr20 ml20">
      <el-col :xs="24" class="p bold">商品分类</el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb20 pl20 pr10 mr20 ml20">
      <el-col :xs="24" class="relative pl10 pr10">
        <router-link to="/mobile/product/7" class="width-100 block">智慧鞋垫 <i class="absolute-middle-right el-icon-arrow-right"></i></router-link>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'NavigationBarStoreDialog',
  props: ['isDialogOuter'],
  data () {
    return {
      isDialogInner: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.$emit('close')
    },
    isDialogOuter (newValue) {
      this.isDialogInner = newValue
    },
    isDialogInner (newValue) {
      this.$emit('update:isDialogOuter', newValue)
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['generateUserInfoMutation'])
  },
  created () {
    this.generateUserInfoMutation()
  }
}
</script>
