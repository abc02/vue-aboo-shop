<style>
.el-select-dropdown{
    z-index: 2099 !important;
}
</style>

<template>
<el-dialog
  v-loading="loading"
  :title="title"
  :width="width"
  :top="top"
  :fullscreen="fullscreen"
  :visible="addressStatus === 2"
  @close="handleClickAddressStatus(1)"
  >
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
     <el-form label-position="top" label-width="0" :model="formData">
        <el-form-item>
            <el-input v-model="formData.NickName" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input  v-model="formData.Phone" placeholder="手机"></el-input>
        </el-form-item>
        <el-form-item>
            <el-row>
              <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
                <el-button class="width-100 text-left" @click="handleClickPickerStatus(2)">{{provinceCityAreaDefault}}</el-button>
              </el-col>
              <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
                <area-select :level="2" type="text" v-model="formData.ProvinceCityArea"></area-select>
              </el-col>
            </el-row>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formData.Detail" placeholder="详细地址"></el-input>
        </el-form-item>
         <el-form-item class="text-right">
          <el-button type="text" @click="handleClickAddressAdd(formData)">保存并使用</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <!-- <el-row slot="footer" :gutter="20" type="flex" justify="start" align="middle">
    <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
      <el-button v-if="isAdd" class="width-100" type="primary" @click="handleClickAddressAdd(formData)">保存并使用</el-button>
      <el-button v-else class="width-100" type="primary" @click="handleClickAddressUpdate(formData)">保存并使用</el-button>
    </el-col>
    <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
        <el-button type="text" @click="handleClickAddressStatus(1)">取 消</el-button>
    </el-col>
  </el-row> -->
  <el-row v-if="pickerStatus === 2" slot="footer" :gutter="20" type="flex" justify="start" align="middle">
    <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :xs="2">
          <el-button type="text" @click="handleClickPickerStatus(1)">取消</el-button>
        </el-col>
        <el-col :xs="2">
          <el-button type="text" @click="handleClickPickerStatus(1)">确定</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</el-dialog>
</template>

<script>
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import AddressBase from 'components/AddressBase'
import { Picker } from 'mint-ui'
import myaddress from './pca.json'
import VueAreaLinkage from 'vue-area-linkage'
Vue.use(VueAreaLinkage)
Vue.component(Picker.name, Picker)
export default {
  name: 'AddressDialog',
  extends: AddressBase,
  props: ['loading', 'fullscreen', 'addressStatus', 'addressFormData'],
  data () {
    return {
      pickerStatus: 1,
      formData: {
        NickName: '',
        Phone: '',
        Detail: '',
        ProvinceCityArea: [],
        IsDefault: 1 // 1 设置默认地址 0 不设置默认地址
      },
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress),
          className: 'slot1',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot2'
        },
        {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }]
    }
  },
  components: {
    'mt-picker': Picker
  },
  computed: {
    width () {
      if (this.fullscreen) return '100vw'
      return '560px'
    },
    top () {
      if (this.fullscreen) return '5vh'
      return '0'
    },
    title () {
      if (this.addressFormData) return '编辑地址'
      return '添加并使用新地址'
    },
    isAdd () {
      if (this.addressFormData) return false
      return true
    },
    provinceCityAreaDefault () {
      if (this.formData.ProvinceCityArea && this.formData.ProvinceCityArea.length) {
        return this.formData.ProvinceCityArea.join(',')
      }
      return '省份 | 城市 | 区县'
    }
  },
  methods: {
    onMyAddressChange (picker, values) {
      picker.setSlotValues(1, Object.keys(myaddress[values[0]]))
      picker.setSlotValues(2, myaddress[values[0]][values[1]])
      this.formData.ProvinceCityArea = values
    },
    handleClickPickerStatus (status) {
      this.pickerStatus = status
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.myAddressSlots[0].defaultIndex = 0
    })
  }
}
</script>
