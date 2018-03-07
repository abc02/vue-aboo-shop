<template>
  <div v-if="cartLists">
    <el-row type="flex" justify="start" align="middle" class="bg-white">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="mb20 border-bottom">
        <el-table
          :data="cartLists"
          stripe
          style="width: 100%">
          <el-table-column
            label="商品"
            width="191"
            align="center"
            header-align="left">
            <template slot-scope="scope">
              <img :src="scope.row.img" :alt="scope.row.goodsName" style="width: 100px; height:100px;">
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button type="text" @click="handleClickRedirectPage('product', {goodsId: scope.row.goodsId})">{{scope.row.goodsName}}</el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="价格"
            width="227">
            <template slot-scope="scope">
              {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="122  ">
            <template slot-scope="scope">
              {{scope.row.number}}
            </template>
          </el-table-column>
          <el-table-column
              label="小计"
              width="122">
            <template slot-scope="scope">
              <el-button type="text" class="padding-0">{{`￥${Number.parseFloat(scope.row.price * scope.row.number).toFixed(2)}`}}</el-button>
            </template>
          </el-table-column>
          <el-table-column
              width="62"
              align="right">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-delete" @click="handleCartDeleteAction(scope.row.key)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" align="middle" class="bg-white">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <el-table
          :data="cartLists"
          :show-header="false"
          stripe
          style="width: 100%">
          <el-table-column
            label="商品"
            width="80">
            <template slot-scope="scope">
              <img :src="scope.row.img" alt="商品图像" style="width: 70px; height:70px;">
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-row type="flex" justify="start" align="middle" class="mb10 h3 gray">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  {{scope.row.goodsName}}
                </el-col>
              </el-row>
              <el-row type="flex" justify="start" align="middle" >
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="bold">
                  {{`￥${Number.parseFloat(scope.row.price).toFixed(2)}`}}
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="80">
            <template slot-scope="scope">
              <el-row type="flex" justify="start" align="top">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  数量：{{scope.row.number}}
                </el-col>
              </el-row>
              <el-row type="flex" justify="start" align="middle" v-if="isEdit">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-button type="text" @click="handleCartDeleteAction(scope.row.key)">删除</el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CommonBase from 'mixins/CommonBase'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('cart')
export default {
  name: 'List',
  mixins: [CommonBase],
  computed: {
    ...mapState(['cartLists', 'isEdit'])
  },
  methods: {
    ...mapActions(['handleCartDeleteAction'])
  }
}
</script>
