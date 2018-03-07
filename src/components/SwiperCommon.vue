<template>
   <el-carousel :height="h">
      <el-carousel-item v-for="(itemName, index) in instance" :key="index">
        <slot :name="itemName"></slot>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  name: 'SwiperCommon',
  props: ['instance', 'h']
}
</script>
<style>
.el-carousel__button {
  width: 42px;
  height: 6px;
  background-color: rgba(0, 0, 0, .6);
}
.el-carousel__indicator.is-active .el-carousel__button{
  background-color: #f6655e !important;
}
</style>
