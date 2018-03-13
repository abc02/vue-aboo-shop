<template>
  <el-row type="flex" justify="center" align="middle" style="height: 60px">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2" class="pointer">
          <router-link to="/">
            ABOO商城
          </router-link>
        </el-col>
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20"></el-col>
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
          <el-dropdown>
            <span class="pointer">
              我的账号
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                 <router-link :to="{ name: 'user'}">
                  <span class="pointer">我的账号</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{ name: 'orderslists'}">
                  <span class="pointer">我的订单</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="handleUserInfoOutMutation">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import CommonBase from 'mixins/CommonBase'
import { mapState, mapMutations, createNamespacedHelpers } from 'vuex'
export default {
  name: 'NavigationBarCartHeader',
  mixins: [CommonBase],
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    ...mapMutations(['handleUserInfoOutMutation'])
  }
}
</script>
