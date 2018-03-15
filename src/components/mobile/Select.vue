<template>
  <el-container direction="vertical" >
    <FormMobile :type="type" :instance="currentAddress" @close="handleFormMobileClose" :isFirst="isFirst" v-if="isForm"  />
    <el-container direction="vertical" v-else>
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="24" class="pt10 pb10 pl10 pr10 bg-gray p relative">
          选择地址
          <router-link :to="{ name: 'summary' }">
            <i class="el-icon-close absolute-middle-right mr20 h3"></i>
          </router-link>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle"
        class="pt10 pb10 pl10 pr10 border-bottom bg-white"
        v-if="addressLists && addressLists.length"
        v-for="(address, index) in addressLists" :key="index"
        @click.native="handleFormMobile('edit', address)" >
          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="text-center">
              <i v-if="address.isDefault" class="el-icon-circle-check"></i>
              <i v-else class="el-icon-circle-check-outline"></i>
          </el-col>
          <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
            <el-row type="flex" justify="start" align="middle" class="pb10 pt10">
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                {{address.nickName}}
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="text-right">
                {{address.phone}}
              </el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="pb10">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                {{`${address.province} ${address.city} ${address.area} ${address.detail}`}}
              </el-col>
            </el-row>
            <el-row type="flex" justify="start" align="middle" class="pb10">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-button type="text" class="padding-0">编辑</el-button>
              </el-col>
            </el-row>
          </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="border-bottom pt10 pb10 pl10 pr10" @click.native="handleFormMobile('add')">
        <el-col :span="24">
            <i class="el-icon-circle-plus-outline h3" style="color: #f6655e"></i><el-button type="text" class="ml20">新增地址</el-button>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script>
import FormMobile from 'components/address/FormMobile.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('address')
export default {
  name: 'Select',
  props: ['isFirst'],
  data () {
    return {
      isForm: false,
      type: '',
      currentAddress: null
    }
  },
  components: {
    FormMobile
  },
  computed: {
    ...mapState(['addressLists'])
  },
  watch: {
    addressLists: {
      handler (value) {
        console.log(value)
        if (value) {
          this.isForm = false
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(['generateAddressListsAction']),
    handleFormMobile (type, instance) {
      if (type === 'edit') {
        this.currentAddress = instance
      } else if (type === 'add') {
        this.currentAddress = null
      }
      this.type = type
      this.isForm = true
    },
    handleFormMobileClose () {
      this.isForm = false
    }
  },
  activated () {
    console.log('activated ')
    this.generateAddressListsAction()
    // addressLists -> null 弹出框
    if (!this.addressLists) {
      this.isForm = true
      this.type = 'add'
    }
  }
  // created () {
  //   this.generateAddressListsAction()
  // }
}
</script>
