<template>
  <el-container direction="vertical" v-loading="loading" >
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="mt10 mb10 pl10 pr10 relative">收货地址
        <router-link :to="{ name: 'summary' }">
          <i class="el-icon-close button-right" v-show="addressLists"></i>
        </router-link>
      </el-col>
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="h1 mt20 mb20 relative">收货地址
        <router-link :to="{ name: 'summary' }">
          <i class="el-icon-close button-right" v-show="addressLists"></i>
        </router-link>
      </el-col>
    </el-row>
    <el-container direction="vertical" class="bg-white" v-if="addressLists && addressLists.length">
      <el-row type="flex" justify="start" align="middle" v-for="(address, index) in addressLists" :key="index" class="pt10 pb10 pl10 pr10 mb10 border-bottom">
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
              <router-link :to="{ name: 'form', params: { type: 'edit', instance: address } }">
                <el-button type="text" class="padding-0">编辑</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
    <el-container direction="vertical" class="bg-white">
      <router-link :to="{ name:'form', params: { type: 'add' } }">
        <el-row type="flex" justify="start" align="middle">
          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="text-center">
            <i class="el-icon-circle-plus-outline" style="color: #409EFF"></i>
          </el-col>
          <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
            <el-button type="text">新增地址</el-button>
          </el-col>
        </el-row>
      </router-link>
    </el-container>
    <!-- <el-container>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="text-right">
          <el-button class="bottom-fixed width-100 pl20 pr20 pt20 pb20" type="primary" :loading="loading" @click="handeClickAddressSetDefault(filterDefaultAddress.Id)">使用已选地址</el-button>
        </el-col>
      </el-row>
    </el-container> -->
  </el-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'All',
  created () {
    if (!this.addressLists) {
      this.generateAddressListsAction()
    }
  },
  methods: {
    ...mapActions(['generateAddressListsAction'])
  },
  computed: {
    ...mapState(['loading', 'addressLists'])
  }
}
</script>
