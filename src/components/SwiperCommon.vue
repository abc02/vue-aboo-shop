<template>
   <el-carousel trigger="click" height="70vh" :autoplay="false">
      <el-carousel-item v-for="(itemName, index) in instance" :key="index">
        <slot :name="itemName"></slot>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  name: 'SwiperCommon',
  props: ['instance']
}
</script>