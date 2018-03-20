<template>
  <el-container direction="vertical" class="pl20 pr20 bg-white">
    <el-row type="flex">
      <el-col :span="24">
         <mu-text-field
          labelClass="p"
          required
          type="text"
          v-model="nickName"
          :errorText="nickNameErrorText"
          label="姓名"
          fullWidth
          labelFloat />
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24">
        <mu-text-field
          labelClass="p"
          required
          type="text"
          v-model="phone"
          :errorText="phoneErrorText"
          label="手机号"
          fullWidth
          labelFloat/>
      </el-col>
    </el-row>
    <!-- <el-row type="flex" class="pt20 pb10">
      <el-col :span="24">
        <el-row type="flex" justify="start" align="middle" :gutter="10">
          <el-col :span="8">
            <el-select v-model="province" placeholder="请选择" size="mini">
              <el-option
                v-for="(val, key, index) in addressData"
                :key="index"
                :label="key"
                :value="key">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
              <el-select v-model="city" placeholder="请选择" size="mini">
              <el-option
                v-for="(val, key, index) in cityLists"
                :key="index"
                :label="key"
                :value="key">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-select v-model="area" placeholder="请选择" size="mini">
              <el-option
                v-for="(item, index) in areaLists"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row> -->
    <el-row type="flex">
      <el-col :span="8">
        <mu-select-field
          v-model="province"
          :errorText="provinceErrorText"
          :maxHeight="300"
          fullWidth
          label="省份"
          labelFloat
          labelClass="p">
          <mu-menu-item v-for="(val, key, index) in addressData"
                :value="key"
                :title="key"
                :key="index" />
        </mu-select-field>
      </el-col>
      <el-col :span="8">
        <mu-select-field
          v-model="city"
          :errorText="cityErrorText"
          :maxHeight="300"
          fullWidth
          label="城市"
          labelFloat
          labelClass="p">
          <mu-menu-item v-for="(val, key, index) in cityLists"
                :value="key"
                :title="key"
                :key="index" />
        </mu-select-field>
      </el-col>
      <el-col :span="8">
        <mu-select-field
          v-model="area"
          :errorText="areaErrorText"
          :maxHeight="300"
          fullWidth
          label="地区"
          labelFloat
          labelClass="p">
          <mu-menu-item v-for="(item, index) in areaLists"
                :value="item"
                :title="item"
                :key="index" />
        </mu-select-field>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24">
         <mu-text-field
          labelClass="p"
          name="detail"
          type="text"
          v-model="detail"
          :errorText="detailErrorText"
          fullWidth
          label="详细地址"
          labelFloat/>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="pb10 pt20">
        <el-button type="primary" :loading="isLoading" @click="handleAddress">保存并使用</el-button>
        <el-button @click="handleDialogClose" v-show="isDialog">取消</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" v-if="type === 'edit'">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="pb10 pt20">
        <el-button type="text" :loading="isLoading" @click="handleAddressDeleteAction(addressId)">删除地址</el-button>
      </el-col>
    </el-row>
    <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button
            class="bottom-fixed width-100 pl20 pr20 pt20 pb20"
            type="primary"
            :loading="isLoading"
            @click="handleAddress">确认</el-button>
        </el-col>
      </el-row>
  </el-container>
</template>

<script>
import pca from 'modules/service/pca.json'
import { mapState, mapMutations, createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('address')
export default {
  name: 'Form',
  props: ['isFirst', 'isDialog', 'type', 'instance'],
  data () {
    return {
      nickName: '',
      phone: '',
      province: '',
      city: '',
      area: '',
      detail: '',
      isDefault: false,
      addressId: '',
      userId: '',
      addressData: pca,
      cityLists: null,
      areaLists: null,
      isInit: false,
      isCheck: false
    }
  },
  computed: {
    ...mapState(['isLoading']),
    nickNameErrorText () {
      if (this.isCheck) {
        // 检验姓名：姓名是2-4字的汉字
        let checkNickName = /([\u4e00-\u9fa5\ ]{2,4})$/
        // 验证姓名不能为空
        if (this.nickName === '') return '名字不能为空'
        if (!checkNickName.exec(this.nickName)) return '请输入2-4位汉字名字'
      }
      return ''
    },
    phoneErrorText () {
      if (this.isCheck) {
        // 校验手机号码：必须以数字开头
        let checkPhone = /^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (this.phone === '') return '联系号码不能为空'
        if (!checkPhone.exec(this.phone)) return '号码格式错误'
      }
      return ''
    },
    provinceErrorText () {
      if (this.isCheck) {
        // 验证省份不能为空
        if (this.province === '') return '省份不能为空'
      }
      return ''
    },
    cityErrorText () {
      if (this.isCheck) {
        // 验证市级不能为空
        if (this.city === '') return '城市不能为空'
      }
      return ''
    },
    areaErrorText () {
      if (this.isCheck) {
        // 验证地区不能为空
        if (this.city === '') return '地区能为空'
      }
      return ''
    },
    detailErrorText () {
      if (this.isCheck) {
        // 详细地址：必须包含中文
        let checkDetail = /([\u4e00-\u9fa5\ ])$/
        if (this.detail === '') return '详细地址不能为空'
        if (!checkDetail.exec(this.detail)) return '详细地址必须包含中文'
      }
      return ''
    }
  },
  watch: {
    province (key) {
      if (!key) return
      let list = this.addressData
      // 选择省级 -> 联动市级
      this.cityLists = list[key]
      let cityKeyArray = Object.keys(this.cityLists)
      this.city = cityKeyArray[0]
      if (this.type === 'edit' && this.isInit) {
        this.city = this.instance.city
      }
    },
    city (key) {
      if (!key) return
      let list = this.cityLists
      this.areaLists = list[key]
      // 市级 -> 联动区级
      this.area = this.areaLists[0]
      if (this.type === 'edit' && this.isInit) {
        this.area = this.instance.area
        this.isInit = false
      }
    }
  },
  methods: {
    ...mapMutations(['handleDialog']),
    ...mapActions(['handleAddressAddAction', 'handleAddressDeleteAction', 'handleAddressUpdateAction']),
    handleAddress () {
      // 合法校验&非空字符串
      this.isCheck = true
      setTimeout(_ => {
        let { nickName, phone, province, city, area, detail, isFirst } = this
        if (!this.nickNameErrorText && !this.phoneErrorText && !this.detailErrorText) {
          let instance = { nickName, phone, province, city, area, detail }
          if (this.type === 'edit') {
            let { addressId, userId, isDefault } = this
            this.handleAddressUpdateAction({ ...instance, addressId, userId, isDefault })
          } else if (this.type === 'add') {
            this.handleAddressAddAction({...instance, isFirst})
          }
        }
      }, 300)
    },
    handleDialogClose () {
      this.$emit('close')
    }
  },
  created () {
    if (this.type === 'edit' && this.instance) {
      let { nickName, phone, province, detail, isDefault, addressId, userId } = this.instance
      this.nickName = nickName
      this.phone = phone
      this.province = province
      this.detail = detail
      this.isDefault = isDefault
      this.addressId = addressId
      this.userId = userId
      this.isInit = true
    }
  }
}
</script>
