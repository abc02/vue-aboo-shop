<template>
  <el-container v-loading="isLoading">
    <el-header class="padding-0" height="auto">
        <router-view name="topheader" />
    </el-header>
    <el-main class="padding-0" style="overflow: hidden;">
      <el-container>
        <el-header class="padding-0" height="auto">
          <router-view name="pageheader" />
        </el-header>
        <el-main class="padding-0" style="overflow: hidden;">
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
        <el-footer class="padding-0" height="auto" >
          <router-view name="pagefooter" />
        </el-footer>
      </el-container>
    </el-main>
    <el-footer height="auto">
      <router-view name="bottomfooter" />
    </el-footer>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Index',
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['generateUserInfoMutation'])
  },
  created () {
    this.generateUserInfoMutation()
  }
}
</script>
