<template>
 <el-row type="flex" justify="center" align="middle" style="height: 90vh;">
    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="border pt20 pb20 pl20 pr20 shadow">
      <el-row type="flex" justify="start" align="middle" class="text-center h1 bold mb20">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h1 bold mt20 mb20">注册 </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form labelPosition="top" label-width="80px" :model="formData">
              <el-form-item>
                <el-input v-model="formData.phone" autofocus type="text" placeholder="手机"></el-input>
              </el-form-item>
              <el-form-item class="relative">
                <el-input v-model="formData.code" type="text" placeholder="验证码"></el-input>
                <VCodeButton :phone="formData.phone" :type="2"/>
              </el-form-item>
              <el-form-item>
                <el-input v-model="formData.password" @keyup.native.enter="handlePhoneRegisterAction(formData)" type="password" placeholder="新密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="width-100" type="primary" :loading="isLoading" @click="handlePhoneRegisterAction(formData)">注册</el-button>
              </el-form-item>
            </el-form>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mt20">
          <router-link to="login">
            <el-button type="text">立即登录<i class="el-icon-arrow-right"></i></el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, createNamespacedHelpers } from 'vuex'
import VCodeButton from './VCodeButton.vue'
const { mapActions } = createNamespacedHelpers('login')
export default {
  name: 'Register',
  components: {
    VCodeButton
  },
  data () {
    return {
      formData: {
        phone: '',
        code: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapActions(['handlePhoneRegisterAction'])
  }
}
</script>
