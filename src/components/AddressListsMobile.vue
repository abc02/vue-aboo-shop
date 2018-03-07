<template>
 <el-dialog
  v-loading="loading"
  title="选择地址"
  width="100%"
  top="0"
  :fullscreen="true"
  :visible="addressStatus === 4"
  @close="handleClickAddressStatus(1)"
  >
  <el-row>
    xxxxxxxxxxxxxx
  </el-row>
</el-dialog>
</template>

<script>
import AddressBase from './AddressBase'
export default {
  name: 'AddressLists',
  props: ['userInfo', 'addressLists', 'addressStatus', 'loading'],
  extends: AddressBase,
  created () {
    this.generateGetAddressLists()
  }
}
</script>
