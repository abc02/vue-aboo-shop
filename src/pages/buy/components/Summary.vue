<template>
<el-container direction="vertical" v-loading="isLoading" v-if="filterDefaultAddress">
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="h1 mt20">提交订单</el-col>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="pt10 pb10 pl10">提交订单</el-col>
    </el-row>
    <el-container direction="vertical" class="border-bottom bg-white pt20 pb20">
      <el-row type="flex" justify="start" align="middle" class="pb20 pl10 pr10">
          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="h3 text-center">
            <i class="el-icon-location"></i>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3">
            配送地址
          </el-col>
      </el-row>
      <router-link :to="{ name: 'all'}">
        <el-row type="flex" justify="start" align="middle" class="pb10 pl20 pr10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            {{filterDefaultAddress.nickName}}
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="text-right">
            {{filterDefaultAddress.phone}}
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" class="pb10 pl20 pr10">
          <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
            {{`${filterDefaultAddress.province} ${filterDefaultAddress.city} ${filterDefaultAddress.area} ${filterDefaultAddress.detail}`}}
          </el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="text-right">
            <i class="el-icon-arrow-right"></i>
          </el-col>
        </el-row>
      </router-link>
    </el-container>
    <el-container direction="vertical" class="border-bottom bg-white pt20">
      <el-row type="flex" justify="start" align="middle" class="pb20 pl10 pr10">
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="h3 text-center">
          <i class="el-icon-location"></i>
        </el-col>
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
          订单信息
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="text-right">
          <el-button type="text" class="padding-0" @click="handleClickRedirectPage('cart')">编辑购物车</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" v-for="(cart, index) in cartLists" :key="index" class="border-bottom boder-botton-last-none pt10 pb20 pl20 pr10">
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <img :src="cart.img" :alt="cart.goodsName">
        </el-col>
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="h2 pl10">
          {{cart.goodsName}}
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <el-row type="flex" justify="start" align="middle" class="pb10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3 text-right">
              {{`￥${Number.parseFloat(cart.price).toFixed(2)}`}}
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="p text-right">
              {{`数量:${cart.number}`}}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
    <el-container direction="vertical" class="bg-white pt20">
      <el-row type="flex" justify="end" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-row type="flex" justify="start" align="middle" class="border-bottom mb10 pb10 pt10 pl10 pr10">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">运费：</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="p text-right">包邮</el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="pb10 pt10 pl10 pr10">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="h3">应付总金额:</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="text-right">
                <el-button type="text" class="h1 padding-0">{{cartListsTotal}}</el-button>
              </el-col>
          </el-row>
        </el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
          <el-row type="flex" justify="start" align="middle" class="text-right border-bottom mb20 pb10 pt10">
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">运费：</el-col>
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="p">包邮</el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="text-right mb20">
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="h3">应付总金额:</el-col>
            <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
                <el-button type="text" class="h1 padding-0">{{cartListsTotal}}</el-button>
              </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
    <el-container direction="vertical">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="p mb20 pl10 pr10">
          <el-checkbox :value="true"> <span class="p">提交订单即表示您同意</span> <el-button type="text">ABOO 商城的销售政策</el-button></el-checkbox>
        </el-col>
      </el-row>
    </el-container>
    <el-container direction="vertical">
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="h1">
          <el-button type="primary" :loading="isLoading" class="width-100 pt20 pb20" @click="handleOrderAddAction(cartLists)">提交订单，去支付</el-button>
        </el-col>
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="text-right">
          <el-button type="primary" :loading="isLoading" @click="handleOrderAddAction(cartLists)" style="width: 300px;">提交订单，去支付</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="p text-right">
          点击提交订单表示您同意<el-button type="text">ABOO 商城的销售政策</el-button>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script src="./Summary.js"></script>
