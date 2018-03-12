<template>
  <el-dialog
  v-if="isDialog"
  :visible="isDialog"
  top="25vh"
  width="60vw"
  center
  :show-close="false">
  <el-container direction="vertical">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="text-center mb20">
        <i class="el-icon-circle-check-outline" style="font-size: 3.6rem;"></i>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="border-bottom text-center pb20">
        <span style="font-size: 1.3rem;">{{message}}</span>
      </el-col>
    </el-row>
  </el-container>
  <el-container direction="vertical" slot="footer">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="0" :sm="16" :md="16" :lg="16" :xl="16" >
        <el-button @click="close" class="mr20">继续购物车</el-button>
        <router-link :to="{ name: 'cart' }">
          <el-button type="primary">查看购物车</el-button>
        </router-link>
      </el-col>
    </el-row>
  </el-container>
</el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['isDialog', 'message'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
