<template>
  <el-container>
      <el-header height="40px">
        我的收货地址
      </el-header>
      <el-main>
        <el-row>
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
            <el-button type="primary" @click="handleClickAddAddress('2')">添加新地址</el-button>
          </el-col>
        </el-row>
      </el-main>
  </el-container>
</template>

<script>
import ShopService from 'modules/service/ShopServices'
export default {
  name: 'AddressList',
  props: ['userInfo'],
  methods: {
    handleClickAddAddress (status) {
      this.$emit('on-handle-click-add-address', status)
    }
  },
  created () {
    let data = {
      userId: this.userInfo.UserId
    }
    ShopService.GetAddressList(data).then(res => {
      console.log(res)
    })
  }
}
</script>
