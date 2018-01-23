<style lang="scss">
  .image {
    width: 100%;
    display: block;
  }
</style>

<template>
    <el-container direction="vertical" v-if="goodsinfo && priceList && specDatas">
      <el-row>
        <el-col :span="12">
          <image src="//ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1389304265,2918777290&fm=27&gp=0.jpg" class="image"/>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="24">{{goodsInfo.Title}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="24">{{goodsInfo.Intr}}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import API from 'utils/api'

let { goodsId } = qs.parse(location.search.substr(1))

export default {
  name: 'Product',
  data () {
    return {
      goodsInfo: null,
      priceList: null,
      specDatas: null
    }
  },
  methods: {
    redirectToCart () {
      location.href = 'cart.html'
    }
  },
  async created () {
    let res = await axios.post(API.GetGoodsSpec, { goodsId })
    console.log(res)
    this.goodsInfo = res.data.goodsinfo
    this.priceList = res.data.priceList
    this.specDatas = res.data.specDatas
  }
}
</script>
