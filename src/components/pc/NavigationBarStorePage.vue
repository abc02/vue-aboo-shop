<template>
  <el-row type="flex" justify="center" align="middle" class="border-bottom" style="height: 60px">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="pointer">
          <router-link to="/">
            ABOO商城
          </router-link>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="text-center h3 gray">
          <router-link :to="{ name: 'mobile' }">
            <div>ABOO商城</div>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import { mapState, mapMutations, createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')
export default {
  name: 'NavigationBarStorePage',
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(['cartListsTotal'])
  },
  methods: {
    ...mapMutations(['generateUserInfoMutation'])
  },
  created () {
    this.generateUserInfoMutation()
  }
}
</script>
