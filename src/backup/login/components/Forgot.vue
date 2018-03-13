<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="middle" class="text-center h1 bold mb20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        找回密码
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-form labelPosition="top" label-width="80px" :model="formData">
            <el-form-item>
              <el-input v-model="formData.phone" autofocus type="text" placeholder="手机"></el-input>
            </el-form-item>
            <el-form-item class="relative">
              <el-input v-model="formData.code" type="text" placeholder="验证码"></el-input>
              <VCodeButton :phone="formData.phone" :type="3" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="formData.password" @keyup.native.enter="handlePhoneForgotAction(formData)" type="password" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="width-100" type="primary" :loading="isLoading" @click="handlePhoneForgotAction(formData)">提交</el-button>
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
  </el-container>
</template>
<script>
import { mapState, createNamespacedHelpers } from 'vuex'
import VCodeButton from './VCodeButton.vue'
const { mapActions } = createNamespacedHelpers('login')
export default {
  name: 'Forgot',
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
    ...mapActions(['handlePhoneForgotAction'])
  }
}
</script>
