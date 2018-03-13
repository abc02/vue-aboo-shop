<style lang="scss" scoped>
.el-form-item{
  position: relative;
  .switch-password-get {
    position: absolute;
    top:0;
    right:12px;
  }
}
</style>

<template>
  <el-row type="flex" justify="center" align="middle" style="height: 100vh;">
    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="border pt20 pb20 pl20 pr20 shadow">
      <el-row type="flex" justify="start" align="middle" class="text-center">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h1 bold mt20 mb20">登录 </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form :model="formData">
          <el-form-item>
            <el-input v-model="formData.phone" autofocus required type="text" placeholder="手机"></el-input>
          </el-form-item>
          <el-form-item class="relative">
            <el-input v-model="formData.password" @keyup.native.enter="handleMallsLoginAccount(formData)" required type="password" placeholder="密码"></el-input>
            <el-row type="flex" justify="start" align="middle" class="button-right">
              <el-col :xs="0" :sm="24 " :md="24" :lg="24 " :xl="24">
                <router-link to="forgot">
                  <el-button type="text">忘记密码？</el-button>
                </router-link>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button  class="width-100" type="primary" :loading="isLoading" @click="handlePhoneLoginAction(formData)">登录</el-button>
          </el-form-item>
        </el-form>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0 " :md="0" :lg="0 " :xl="0" class="text-right">
          <router-link to="forgot">
            <el-button type="text">忘记密码？</el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="24 " :md="24" :lg="24 " :xl="24" class="pt20 pb20">
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="border-bottom"></el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="text-center">尚未注册账户?</el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="border-bottom"></el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="mt20">
          <router-link to="register">
            <el-button plain class="width-100">注册</el-button>
          </router-link>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="text-center">
          <router-link to="register">
            <el-button type="text" size="medium" class="h1">注册<i class="el-icon-arrow-right"></i></el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('login')
export default {
  name: 'LogIn',
  data () {
    return {
      formData: {
        phone: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapActions(['handleMallsLoginAccount'])
  }
}
</script>
