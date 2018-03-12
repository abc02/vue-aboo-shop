<template>
  <el-container direction="vertical" class="pl10 pr10 bg-white">
    <el-row type="flex" justify="start" align="middle" class="border-bottom pb10 pt10">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="p">收件人</el-col>
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
        <input type="text" v-model="nickName" class="width-100">
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="border-bottom pb10 pt10">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="p">联系电话</el-col>
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
        <input type="text" v-model="phone" class="width-100">
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="border-bottom pb10 pt10">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="p">选择地区</el-col>
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
        <el-row type="flex" justify="start" align="middle" :gutter="10">
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <el-select v-model="province" placeholder="请选择" size="mini">
              <el-option
                v-for="(val, key, index) in addressData"
                :key="index"
                :label="key"
                :value="key">
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
              <el-select v-model="city" placeholder="请选择" size="mini">
              <el-option
                v-for="(val, key, index) in cityLists"
                :key="index"
                :label="key"
                :value="key">
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="border-bottom pb10 pt10">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="p">详细地址</el-col>
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
        <input type="text" v-model="detail" class="width-100">
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="pb10 pt20">
        <el-button type="primary" :loading="isLoading" @click="handleAddress">保存并使用</el-button>
        <el-button @click="handleDialogClose" v-show="isDialog">取消</el-button>
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
      isInit: false
    }
  },
  computed: {
    ...mapState(['isLoading'])
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
      let { nickName, phone, province, city, area, detail, isFirst } = this
      let instance = { nickName, phone, province, city, area, detail }
      if (this.type === 'edit') {
        let { addressId, userId, isDefault } = this
        this.handleAddressUpdateAction({ ...instance, addressId, userId, isDefault })
      } else if (this.type === 'add') {
        this.handleAddressAddAction({...instance, isFirst})
      }
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

<style>
input{
  border: none;
  outline: none;
}
input:focus{
    border: none;
    outline: none;
  }
</style>
