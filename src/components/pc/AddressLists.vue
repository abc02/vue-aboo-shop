<template>
<el-container direction="vertical">
  <el-table
    :data="addressLists"
    stripe
    style="width: 100%"
    class="mb20"
    v-if="addressLists && addressLists.length"
    size="small">
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
      <el-button size="mini" @click="handleAddressDialog('edit', scope.row)">编辑</el-button>
      <el-button size="mini" type="danger" @click="handleAddressDeleteAction(scope.row.addressId)">删除</el-button>
    </template>
    </el-table-column>
  </el-table>
  <el-alert title="您的账户暂时没有地址。 " type="info" :closable="false" class="mb20" v-else></el-alert>
  <el-row type="flex" justify="start" align="middle">
    <el-col :span="4">
       <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAddressDialog('add')">新增收货地址</el-button>
    </el-col>
  </el-row>
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
import Form from 'components/address/Form.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('address')
export default {
  name: 'AddressLists',
  data () {
    return {
      isDialog: false,
      type: '',
      currentAddress: null
    }
  },
  components: {
    Form
  },
  computed: {
    ...mapState(['addressLists']),
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
      handler () {
        this.isDialog = false
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(['generateAddressListsAction', 'handleAddressDeleteAction']),
    handleAddressDialog (type, instance) {
      if (type === 'edit') {
        this.currentAddress = instance
      } else if (type === 'add') {
        this.currentAddress = null
      }
      this.type = type
      this.isDialog = true
    },
    handleDialogClose () {
      this.isDialog = false
    }
  },
  created () {
    this.generateAddressListsAction()
  }
}
</script>
