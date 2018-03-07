<style lang="scss" scoped>
.card {
  cursor: pointer;
  &.active {
    border: 1px solid #409EFF;
  }
  .address-button {
    display: none;
  }
  &:hover .address-button{
    display: block;
  }
}
</style>

<template>
  <el-container direction="vertical" v-loading="loading">
    <el-row>
      <el-col class="h1">提交订单</el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle">
      <el-col :span="3" calss="h2">收货地址</el-col>
      <el-col :span="3">
        <el-button type="text">使用新地址</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" v-for="(address, index) in addressArray" :key="index" :offset="index > 0 ? 1 : 0">
        <el-card
          :class=" [address.IsDefault === 1 ? 'active' : '', 'card' ]"
          @click.native="handleClickAddressSwitchDefault(address)">
            <el-row>
              <el-col>{{address.NickName}}</el-col>
            </el-row>
            <el-row>
              <el-col>{{address.Phone}}</el-col>
            </el-row>
            <el-row>
              <el-col>{{address.AddressLonger}}</el-col>
            </el-row>
            <el-row style="height: 18px;" type="flex"  justify="end" align="middle">
              <el-col :span="3" class="text-center address-button">
                <el-button type="text" @click="handleClickAddressUpdate(address)">修改</el-button>
              </el-col>
              <el-col :span="3" class="text-center address-button">
                <el-button type="text" @click="handleClickAddressDelete(address)">删除</el-button>
              </el-col>
            </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="h1">物流方式</el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-card
          class="card active">
            <el-row>
              <el-col>免运费</el-col>
            </el-row>
            <el-row>
              <el-col>发货后，需要2-4天时间</el-col>
            </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="3" class="h1">订单预览</el-col>
      <el-col :span="3" class="text-right">
        <el-button type="text">返回购物车</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table
            :data="cartLists"
            :show-header="false"
            style="width: 100%">
            <el-table-column>
              <template slot-scope="scope">
                  <el-row :gutter="20" type="flex" justify="start" align="middle">
                    <el-col :span="2">
                      <img  :src="scope.row.img" alt="商品图像">
                    </el-col>
                    <el-col :span="22">
                      <el-button type="text" @click="handleClickRedirectProduct(scope.row.goodsId)">{{scope.row.goodsName}}</el-button>
                    </el-col>
                  </el-row>
                </template>
            </el-table-column>
            <el-table-column
              width="200">
              <template slot-scope="scope">
                {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
              </template>
            </el-table-column>
            <el-table-column
              label="数量"
              width="200  ">
              <template slot-scope="scope">
                {{`数量：${scope.row.number}`}}
              </template>
            </el-table-column>
            <el-table-column
                align="right"
                label="小计"
                width="200">
              <template slot-scope="scope">
                {{`￥${Number.parseFloat(scope.row.price * scope.row.number).toFixed(2)}`}}
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
       <el-row type="flex" justify="end" align="middle">
          <el-col :span="3" class="text-right">
            应付总额：
          </el-col>
          <el-col :span="3" class="text-right">
            {{total}}
          </el-col>
      </el-row>
      <el-row type="flex" justify="end" align="middle">
        <el-col :span="3" class="text-right">
            <el-button type="primary" :loading="loading" @click="handleClickOrderAdd(cartLists)">提交订单，去支付</el-button>
          </el-col>
      </el-row>
  </el-container>
</template>

<script>
import AddressBase from './AddressBase'
export default {
  name: 'BuyList',
  props: ['addressLists', 'cartLists', 'loading'],
  extends: AddressBase,
  computed: {
    mailAddress () {
      if (this.addressLists && this.addressLists.length) {
        let mailAddress
        this.addressLists.slice(0).forEach(address => {
          if (address.IsDefault === 1) {
            mailAddress = address
          }
        })
        return mailAddress
      }
      return null
    }
  },
  methods: {
    handleClickAddressUpdate (address) {
      this.$emit('on-handle-click-address-update', address)
    },
    handleClickAddressDelete (address) {
      this.$emit('on-handle-click-address-delete', address)
    },
    handleClickAddressSwitchDefault (address) {
      this.$emit('on-handle-click-address-switch-default', address)
    },
    handleClickOrderAdd (goods) {
      this.$emit('on-handle-click-order-add', goods, this.mailAddress)
    }
  }
}
</script>
