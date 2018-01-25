<template>
    <el-container>
        <el-header height="40px">
            添加新地址
        </el-header>
        <el-main>
          <el-container>
            <el-form label-position="top" label-width="80px" :model="formData">
                <el-form-item label="收件人姓名">
                    <el-input v-model="formData.nickName"></el-input>
                </el-form-item>
            </el-form>
            <area-select :level="2" type="text" v-model="selected"></area-select>
          </el-container>
        </el-main>
    </el-container>
</template>
<script>
import Vue from 'vue'
import VueAreaLinkage from 'vue-area-linkage'
Vue.use(VueAreaLinkage)
export default {
  name: 'AddAddress',
  data () {
    return {
      formData: {
        nickName: ''
      },
      selected: []
    }
  },
  methods: {
  }
}
</script>
