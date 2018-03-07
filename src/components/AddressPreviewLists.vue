<style>
.area-select .el-select:first-child{
  margin-left: 0 !important;
}
</style>
<template>
  <el-row type="flex" justify="center" align="middle" v-if="addressLists" @click.native="handleClickAddressStatus(4)">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="h3">
          <i class="el-icon-location"></i> 配送地址
        </el-col>
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
          <el-button type="text" @click="handleClickAddressStatus(2)">使用新得地址</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              {{isDefaultAddress.NickName}}
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              {{isDefaultAddress.Phone}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="22" :sm="24" :md="24" :lg="24" :xl="24">
              {{`${isDefaultAddress.Province} ${isDefaultAddress.City} ${isDefaultAddress.Area} ${isDefaultAddress.Detail}`}}
            </el-col>
            <el-col :xs="2" :sm="0" :md="0" :lg="0" :xl="0">
              <i class="el-icon-arrow-right"></i>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
     </el-col>
  </el-row>
</template>

<script>
// import Vue from 'vue'
import AddressBase from './AddressBase'
export default {
  name: 'AddressLists',
  props: ['userInfo', 'addressLists'],
  extends: AddressBase,
  computed: {
    isDefaultAddress () {
      if (this.addressLists && this.addressLists.length) {
        let isDefaultAddress
        this.addressLists.slice(0).forEach(address => {
          if (address.IsDefault === 1) {
            isDefaultAddress = address
          }
        })
        return isDefaultAddress
      }
      return null
    }
  }
}
</script>
