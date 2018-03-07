<template>
<el-container direction="vertical">
  <el-table :data="modifyAddressLists" stripe style="width: 100%" class="mb20" v-if="modifyAddressLists && modifyAddressLists.length">
    <el-table-column
      prop="nickName"
      label="联系人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="addressLonger"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      label="默认"
      width="60">
    <template slot-scope="scope">
      <i class="el-icon-circle-check" v-if="scope.row.isDefault"></i>
    </template>
    </el-table-column>
    <el-table-column
      align="right"
      label="操作"
      width="180">
    <template slot-scope="scope">
      <router-link :to="{ name: 'addressform', params: { type: 'edit', instance: scope.row}}">
        <el-button size="mini">编辑</el-button>
      </router-link>
      <el-button size="mini" type="danger" @click="handleAddressDeleteAction(scope.row.addressId)">删除</el-button>
    </template>
    </el-table-column>
  </el-table>
  <el-alert title="您的账户暂时没有地址。 " type="info" :closable="false" class="mb20" v-else></el-alert>
  <router-link :to="{ name: 'addressform', params: { type: 'add' } }">
    <el-button type="primary" icon="el-icon-circle-plus-outline">新增收货地址</el-button>
  </router-link>
</el-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AddressLists',
  computed: {
    ...mapGetters(['modifyAddressLists'])
  },
  methods: {
    ...mapActions(['generateAddressListsAction', 'handleAddressDeleteAction'])
  },
  created () {
    this.generateAddressListsAction()
  }
}
</script>
