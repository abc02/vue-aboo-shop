<template>
  <el-container direction="vertical" class="border-bottom bg-white mt20 mb20 pb20">
    <el-row type="flex" justify="start" align="middle" class="pb20">
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="h1">
        收货地址
      </el-col>
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="h3">
        <el-button type="text" @click="handleAddressDialog('add')" v-show="addressLists">使用新地址</el-button>
      </el-col>
    </el-row>
    <el-container direction="vertical" v-if="addressLists">
      <el-row type="flex" justify="start" align="top" :gutter="20" class="mb20">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="(address, index) in addressListsTmp" :key="index">
          <el-card style="height: 160px;" :class="address.isDefault === 1 ? 'border-active' : ''" class="visibility pointer" @click.native="handleSelectAddressMutation(address.addressId)">
            <el-row type="flex" justify="start" align="middle" class="mb10">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">{{address.nickName}}</el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="mb10">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">{{address.phone}}</el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="mb10">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">{{address.addressLonger}}</el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-right active">
                  <el-button type="text" mr20 @click="handleAddressDialog('edit', address)">修改</el-button>
                  <el-button type="text" @click="handleAddressDeleteAction(address.addressId)">删除</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-row type="flex" justify="start" align="top" v-if="addressLists.length > 4">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
          <el-button type="text">显示更多收货地址<i class="el-icon-arrow-down"></i></el-button>
        </el-col>
      </el-row> -->
     </el-container>
    <el-container direction="vertical" v-else>
      <el-row type="flex" justify="start" align="top">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <Form type="add" :isFirst="true" />
        </el-col>
      </el-row>
    </el-container>
    <el-dialog
      v-if="isDialog"
      :visible.sync="isDialog"
      width="60vw"
      :close-on-click-modal="false"
      :close-on-press-escape="true">
      <el-row type="flex" class="pt20 pb20 pl20 pr20 h3" slot="title">
        <el-col :span="24">{{title}}</el-col>
      </el-row>
      <Form :isDialog="true" :type="type" :instance="currentAddress" @close="isDialog = false" />
    </el-dialog>
  </el-container>
</template>

<script>
import AddressDialog from 'components/address/AddressDialog.vue'
import Form from 'components/address//Form.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('address')
export default {
  name: 'AddressPreviewLists',
  data () {
    return {
      isDialog: false,
      type: '',
      currentAddress: null
    }
  },
  components: {
    AddressDialog,
    Form
  },
  computed: {
    ...mapState(['addressLists', 'addressListsTmp']),
    title () {
      if (this.type === 'edit') {
        return '编辑地址'
      } else if (this.type === 'add') {
        return '添加并使用新地址'
      }
      return ''
    }
  },
  watch: {
    addressLists: {
      handler (newArrays) {
        // this.addressListsTmp = newArrays.slice(0)
        this.isDialog = false
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations(['handleSelectAddressMutation']),
    ...mapActions(['generateAddressListsAction', 'generateAddressDefaultAction', 'handleAddressDeleteAction']),
    handleAddressDialog (type, instance) {
      if (type === 'edit') {
        this.currentAddress = instance
      } else if (type === 'add') {
        this.currentAddress = null
      }
      this.type = type
      this.isDialog = true
    }
    // handleSelectAddress (addressId) {
    //   this.addressListsTmp.forEach(address => {
    //     if(address.addressId === addressId) return address.isDefault = 1
    //     address.isDefault = 0
    //   })
    // }
  },
  activated  () {
    this.generateAddressListsAction()
    this.generateAddressDefaultAction()
  }
}
</script>
