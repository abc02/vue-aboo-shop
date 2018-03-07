<template>
  <el-row type="flex" justify="center" align="middle" v-if="cartLists && cartLists.length">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row  type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button type="text" icon="el-icon-arrow-left" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-table
            :data="cartLists"
            :show-header="false"
            stripe
            style="width: 100%">
            <el-table-column
              label="商品"
              cell-click="xxx"
              width="80px">
              <template slot-scope="scope">
                <el-row>
                  <el-col><img :src="scope.row.img" alt="商品图像"></el-col>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-row>
                  <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
                    <el-row>
                      <el-col>{{scope.row.goodsName}}</el-col>
                    </el-row>
                    <el-row>
                      <el-col> {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}</el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          <el-table-column
              label="数量"
              width="80">
              <template slot-scope="scope">
                数量：{{scope.row.number}}
              </template>
            </el-table-column>
            <el-table-column
                width="60">
              <template slot-scope="scope">
                  <el-button type="text" @click="handleClickCartStatus(2, scope.row.key)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
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
                      <el-button type="text" @click="handleClickRedirectPage('product', {goodsId: scope.row.goodsId})">{{scope.row.goodsName}}</el-button>
                    </el-col>
                  </el-row>
                </template>
            </el-table-column>
            <el-table-column
              label="价格"
              width="200">
              <template slot-scope="scope">
                {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
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
                  <el-button type="text" icon="el-icon-delete" @click="handleClickCartStatus(2, scope.row.key)"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row type="flex" justify="center" align="middle" v-else>
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="">
          <el-button type="text" icon="el-icon-arrow-left" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3 text-center">
          购物车为空
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="text-center">
          <el-button type="primary" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <!-- <el-container direction="vertical" v-if="cartLists && cartLists.length">
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="">
        <el-button type="text" icon="el-icon-arrow-left" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="">
        <el-table
          :data="cartLists"
          :show-header="false"
          stripe
          style="width: 100%">
          <el-table-column
            label="商品"
            cell-click="xxx"
            width="80px">
            <template slot-scope="scope">
              <el-row>
                <el-col><img :src="scope.row.img" alt="商品图像"></el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-row>
                <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
                  <el-row>
                    <el-col>{{scope.row.goodsName}}</el-col>
                  </el-row>
                   <el-row>
                    <el-col> {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}</el-col>
                  </el-row>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
         <el-table-column
            label="数量"
            width="80">
            <template slot-scope="scope">
              数量：{{scope.row.number}}
            </template>
          </el-table-column>
          <el-table-column
              width="60">
            <template slot-scope="scope">
                 <el-button type="text" @click="handleClickCartStatus(2, scope.row.key)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row >
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <el-container direction="vertical" class="cart-button-fixed">
          <el-row type="flex" justify="end" align="middle">
            <el-col :xs="6" :sm="0" :md="0" :lg="0" :xl="0" :pull="2" class="h3">合计：{{total}}</el-col>
          </el-row>
          <el-row type="flex" justify="center" align="middle">
            <el-col :xs="20" :sm="0" :md="0" :lg="0" :xl="0" class="h3">
              <el-button type="primary" class="width-100"  @click="handleClickRedirectPage('buy')">去结算</el-button>
            </el-col>
          </el-row>
        </el-container>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
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
                    <el-button type="text" @click="handleClickRedirectPage('product', {goodsId: scope.row.goodsId})">{{scope.row.goodsName}}</el-button>
                  </el-col>
                </el-row>
              </template>
          </el-table-column>
          <el-table-column
            label="价格"
            width="200">
            <template slot-scope="scope">
              {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
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
                <el-button type="text" icon="el-icon-delete" @click="handleClickCartStatus(2, scope.row.key)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20" class="h1 text-right">
          合计: {{total}}  <el-button type="primary" @click="handleClickRedirectPage('buy')">去结算</el-button>
        </el-col>
    </el-row>
  </el-container> -->
  <!-- <el-row type="flex" justify="center" align="middle" v-else>
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="">
          <el-button type="text" icon="el-icon-arrow-left" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-button class="width-100 cart-button-fixed" type="primary" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs="24" :sm="3" :md="3" :lg="3" :xl="3" class="h3 text-center">
          购物车为空
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3" class="text-center">
          <el-button type="primary" @click="handleClickRedirectPage('product', {goodsId: 7})">继续购物</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row> -->
</template>

<script>
import CartBase from './CartBase'
export default {
  nama: 'CartList',
  props: ['cartLists'],
  extends: CartBase,
  computed: {
    total () {
      if (this.cartLists && this.cartLists.length) {
        let total = 0
        this.cartLists.forEach(cartItem => {
          total += (Number.parseFloat(cartItem.price) * Number.parseInt(cartItem.number))
        })
        return `￥${Number.parseFloat(total).toFixed(2)}`
      }
      return null
    }
  }
}
</script>
