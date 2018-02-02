<template>
  <el-container class="wraper" direction="vertical">
     <el-row v-if="cartLists && cartLists.length">
        <el-col>
          <el-row>
            <el-table
              :data="cartLists"
              stripe
              style="width: 100%">
              <el-table-column
                label="商品">
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
                label="价格"
                width="200">
                <template slot-scope="scope">
                  {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
                    <!-- {{`￥${}.00`}} -->
                </template>
              </el-table-column>
              <el-table-column
                label="数量"
                width="200  ">
                <template slot-scope="scope">
                  {{scope.row.number}}
                </template>
              </el-table-column>
              <el-table-column
                  label="小计"
                  width="200">
                <template slot-scope="scope">
                  {{`￥${Number.parseFloat(scope.row.price * scope.row.number).toFixed(2)}`}}
                </template>
              </el-table-column>
              <el-table-column
                  width="80">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-delete" @click="handlClickCartDelete(scope.row.key)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
          <el-row type="flex" justify="end" align="middle">
            <el-col :span="3" class="text-center">
              合计: {{total}}
            </el-col>
            <el-col :span="3" class="text-center">
              <el-button type="primary" @click="handleClickRedirectBuy">去结算</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-else>
        <el-col>
          <el-row>
            <el-col>
              <el-alert
                  title="您的购物车暂时没有商品。"
                  type="info"
                  :closable="false">
              </el-alert>
            </el-col>
          </el-row>
          <el-row type="flex" justify="end" align="middle">
            <el-col :span="3" class="text-center">
              <el-button type="primary" @click="handleClickRedirectProduct(1)">去购物</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
  </el-container>
</template>

<script>
export default {
  nama: 'CartList',
  props: ['cartLists'],
  computed: {
    total () {
      if (this.cartLists && this.cartLists.length) {
        let total = 0
        this.cartLists.forEach(cartItem => {
          total += (Number.parseFloat(cartItem.price) * Number.parseInt(cartItem.number))
        })
        return total
      }
      return null
    }
  },
  methods: {
    handleClickRedirectBuy () {
      this.$emit('on-handle-click-redirect-buy')
    },
    handleClickRedirectProduct (goodsId) {
      this.$emit('on-handle-click-redirect-product', goodsId)
    },
    handlClickCartDelete (key) {
      this.$emit('on-handle-click-cart-delete', key)
    }
  }
}
</script>
