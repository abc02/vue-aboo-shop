<template>
   <el-carousel :height="swiperHeight">
      <el-carousel-item v-for="(slotName, index) in slotNames" :key="index">
        <slot :name="slotName"></slot>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  name: 'SwiperCommon',
  props: ['slotNames', 'swiperHeight']
}
</script>
<style>
.el-carousel__button {
  width: 18px;
  height: 6px;
  background-color: rgba(0, 0, 0, .6);
}
.el-carousel__indicator.is-active .el-carousel__button{
  background-color: #f6655e !important;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
