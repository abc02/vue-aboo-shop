<template>
  <el-container>
      <el-header height="40px">
        我的收货地址
      </el-header>
      <el-main v-loading="loading" >
        <el-row v-if="addressLists && addressLists.length">
          <el-col>
            <el-table
              v-if="addressArray && addressArray.length"
              :data="addressArray"
              stripe
              style="width: 100%">
              <el-table-column
                prop="NickName"
                label="联系人"
                width="120">
              </el-table-column>
              <el-table-column
                prop="AddressLonger"
                label="地址"
                width="530">
              </el-table-column>
              <el-table-column
                prop="Phone"
                label="电话"
                width="120">
              </el-table-column>
              <el-table-column
                label="默认"
                width="80">
              <template slot-scope="scope">
                <i class="el-icon-circle-check" v-if="addressArray[scope.$index].IsDefault"></i>
              </template>
              </el-table-column>
              <el-table-column
                label="操作"
                >
                <template slot-scope="scope">
                  <el-button
                      size="mini"
                      @click="handleClickAddressStatus('3', scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleClickAddressDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col>
             <el-alert
                title="您的账户暂时没有地址。"
                type="info"
                :closable="false">
            </el-alert>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button type="primary" @click="handleClickAddressStatus('2')">添加新地址</el-button>
          </el-col>
        </el-row>
        </el-main>
  </el-container>
</template>

<script>
import AddressBase from './AddressBase'
export default {
  name: 'AddressList',
  props: ['userInfo', 'addressLists', 'loading'],
  extends: AddressBase,
  methods: {
    handleClickAddressStatus (status, address) {
      this.$emit('on-handle-click-address-status', status, address)
    },
    handleClickAddressDelete (index, address) {
      this.$emit('on-handle-click-address-delete', address)
    }
  },
  computed: {
    addressArray () {
      if (this.addressLists && this.addressLists.length > 0) {
        let arr = []
        this.addressLists.slice(0).forEach(address => {
          let {UserId, Id, IsDefault, NickName, Phone, Detail} = address
          let AddressLonger = `${address.Province}${address.City}${address.Area}${address.Detail}`
          let ProvinceCityArea = [address.Province, address.City, address.Area]
          // Number to Boolean
          IsDefault === 1 ? IsDefault = true : IsDefault = false
          arr.push({ UserId, Id, IsDefault, NickName, Phone, Detail, ProvinceCityArea, AddressLonger })
        })
        return arr
      }
      return []
    }
  },
  created () {
    this.$emit('on-handle-get-address-lists')
  }
}
</script>
