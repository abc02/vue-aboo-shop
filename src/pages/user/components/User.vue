<template>
  <el-container class="height-100">
    <el-header>
      <NavigationBar />
    </el-header>
    <el-row type="flex" justify="center" align="top" class="height-100">
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20" class="height-100">
        <el-container class="mt20 bg-white min-heigth">
          <el-row type="flex" justify="center" align="top">
            <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
              <el-aside style="height: 100%;">
                <NavigationBarLeft class="height-100" />
              </el-aside>
            </el-col>
          </el-row>
          <el-main v-loading="isLoading" class="mobile-padding-0">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import NavigationBar from 'components/NavigationBar'
import NavigationBarLeft from './NavigationBarLeft.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'User',
  components: {
    NavigationBar,
    NavigationBarLeft
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['generateUserInfoCheck'])
  },
  created () {
    this.generateUserInfoCheck()
  }
}
</script>
