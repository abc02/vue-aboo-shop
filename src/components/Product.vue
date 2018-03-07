<template>
  <el-row v-if="goodsInfo && priceList && specDatas && currentGoods" type="flex" justify="center" align="middle">
    <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
      <!-- PC HTML -->
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <img :src="currentGoods.Img" alt="">
        </el-col>
        <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
          <el-row>
            <el-col class="h1">{{goodsInfo.GoodsName}}</el-col>
          </el-row>
          <el-row>
            <el-col class="h2">{{goodsInfo.Intr}}</el-col>
          </el-row>
          <product-spec-datas
            :select-spec-datas="selectSpecDatas"
            :spec-datas="specDatas">
          </product-spec-datas>
          <el-row>
            <el-col class="h3">数量</el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-input-number @change="handleChangeGoodsNumber" :value="number" :min="1" :max="10" label="数量"></el-input-number>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle">
            <!-- <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
              <el-button type="primary">立即购买</el-button>
            </el-col> -->
            <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
              <el-button type="primary" @click="handleClickCartAdd(currentGoods)">加入购车</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- MODILE HTML -->
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="h1">{{goodsInfo.GoodsName}}</el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="h2">{{goodsInfo.Intr}}</el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <product-spec-datas
            :select-spec-datas="selectSpecDatas"
            :spec-datas="specDatas">
          </product-spec-datas>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="h3">数量</el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <el-input-number @change="handleChangeGoodsNumber" :value="number" :min="1" :max="10" label="数量"></el-input-number>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">xxx</el-col>
      </el-row>
        <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">xxx</el-col>
      </el-row>
        <el-row>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">xxx</el-col>
      </el-row>
      </el-col>
  </el-row>
  <!-- <el-container direction="vertical" v-if="goodsInfo && priceList && specDatas">
    <el-row :gutter="20" type="flex" justify="center" align="top">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-row type="flex" justify="end" align="middle">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img v-if="currentGoods" :src="currentGoods.Img" alt="">
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" >
        <el-row>
          <el-col class="h1">
            {{goodsInfo.GoodsName}}
          </el-col>
        </el-row>
        <el-row>
          <el-col class="h2">
            {{goodsInfo.Intr}}
          </el-col>
        </el-row>
        <product-spec-datas
          class="el-row"
          :select-spec-datas="selectSpecDatas"
          :spec-datas="specDatas">
        </product-spec-datas>
        <el-row>
          <el-col class="h3">数量</el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-input-number @change="handleChangeGoodsNumber" :value="number" :min="1" :max="10" label="数量"></el-input-number>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="h1">
        {{goodsInfo.GoodsName}}
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="h2">
        {{goodsInfo.Intr}}
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
       <product-spec-datas
          :select-spec-datas="selectSpecDatas"
          :spec-datas="specDatas"></product-spec-datas>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="h3">数量</el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
         <el-input-number @change="handleChangeGoodsNumber" :value="number" :min="1" :max="10" label="数量"></el-input-number>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">xxx</el-col>
    </el-row>
      <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">xxx</el-col>
    </el-row>
      <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">xxx</el-col>
    </el-row>
  </el-container> -->
</template>

<script>
import ProductBase from './ProductBase'
import ProductSpceDatas from './ProductSpceDatas'
export default {
  name: 'Product',
  extends: ProductBase,
  props: ['goodsInfo', 'priceList', 'specDatas', 'selectSpecDatas', 'currentGoods', 'number'],
  components: {
    'product-spec-datas': ProductSpceDatas
  }
}
</script>
