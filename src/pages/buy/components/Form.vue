<style scoped lang="scss">
input{
  border: none;
  outline: none;
  &:focus{
    border: none;
    outline: none;
  }
}
</style>

<template>
  <el-container direction="vertical"  v-loading="isLoading">
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" v-if="type === 'add'" class="mt10 mb10 pl10 pr10 relative">新增地址
         <router-link :to="{ name: 'all' }">
          <i class="el-icon-close button-right" v-show="addressLists"></i>
        </router-link>
      </el-col>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" v-else class="mt10 mb10 pl10 pr10 relative">编辑地址
        <router-link :to="{ name: 'all' }">
          <i class="el-icon-close button-right" v-show="addressLists"></i>
        </router-link>
      </el-col>
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" v-if="type === 'add'" class="h1 mt20 mb20 relative">新增地址
        <router-link :to="{ name: 'all' }">
          <i class="el-icon-close button-right" v-show="addressLists"></i>
        </router-link>
      </el-col>
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" v-else class="h1 mt20 mb20 relative">编辑地址
        <router-link :to="{ name: 'all' }">
          <i class="el-icon-close button-right" v-show="addressLists"></i>
        </router-link>
      </el-col>
    </el-row>
    <el-container direction="vertical" class="bg-white pl10 pr10">
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
    </el-container>
    <el-container v-if="type ==='add'" direction="vertical" class="bg-white pt10 pl10 pr10">
      <el-row type="flex" justify="start" align="middle" class="pt10 pb10">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button type="primary" :loading="isLoading" class="width-100" @click="handleAddress">保存</el-button>
        </el-col>
          <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          <el-button type="primary" :loading="isLoading" @click="handleAddress">保存</el-button>
        </el-col>
      </el-row>
    </el-container>
    <el-container v-else direction="vertical" class="bg-white pt10 pl10 pr10">
      <el-row type="flex" justify="start" align="middle" class="pt10 pb10">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button type="primary" :loading="isLoading" class="width-100" @click="handleAddress">保存</el-button>
        </el-col>
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          <el-button type="primary" :loading="isLoading" @click="handleAddress">保存</el-button>
          <el-button type="danger" :loading="isLoading"  @click="handleAddressDeleteAction(addressId)">删除</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="pt10 pb10">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button type="danger" :loading="isLoading" class="width-100" @click="handleAddressDeleteAction(addressId)">删除</el-button>
        </el-col>
      </el-row>
    </el-container>
    <el-container v-if="type === 'edit' && !isDefault">
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button
            class="bottom-fixed width-100 pl20 pr20 pt20 pb20"
            type="primary"
            :loading="isLoading"
            @click="handleAddressSetDefaultAction(addressId)">设置默认地址</el-button>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script src="./Form.js"></script>
