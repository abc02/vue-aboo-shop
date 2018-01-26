<style>
.area-select .el-select:first-child{
  margin-left: 0 !important;
}
</style>

<template>
    <el-container>
        <el-header height="40px">
            编辑地址
        </el-header>
        <el-main>
          <el-container>
              <el-form v-loading="loading" label-position="top" label-width="80px" :model="formData">
                <el-form-item label="收件人姓名">
                    <el-input v-model="formData.NickName"></el-input>
                </el-form-item>
                <el-form-item label="省/市/区">
                  <area-select :level="2" type="text" v-model="formData.ProvinceCityArea"></area-select>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input v-model="formData.Detail"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input v-model="formData.Phone"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox v-model="formData.IsDefault">是否设置默认</el-checkbox>
                </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleClickUpdateAddress">保存</el-button>
                <el-button @click="handleClickAddressStatus('1')">取消</el-button>
              </el-form-item>
            </el-form>
          </el-container>
        </el-main>
    </el-container>
</template>
<script>
import Vue from 'vue'
import VueAreaLinkage from 'vue-area-linkage'
Vue.use(VueAreaLinkage)
export default {
  name: 'UpdateAddress',
  props: ['loading', 'updateAddress'],
  data () {
    return {
      formData: {
        NickName: '',
        Detail: '',
        Phone: '',
        IsDefault: false, // 1 设置默认地址 0 不设置默认地址
        ProvinceCityArea: []
      }
    }
  },
  methods: {
    handleClickUpdateAddress () {
      this.$emit('on-handle-click-update-address', this.formData)
    },
    handleClickAddressStatus (status) {
      this.$emit('on-handle-click-address-status', status)
    }
  },
  created () {
    this.formData = this.updateAddress
  }
}
</script>
