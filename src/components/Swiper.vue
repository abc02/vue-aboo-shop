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
