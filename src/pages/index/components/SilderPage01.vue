<template>
  <el-container class="relative height-100">
    <img :src="ab01" alt="ab01" class="absolute-bottom-left" style="width: 479px; height:480px">
    <div class="absolute-middle-right text-right" style="right: 12%">
        <h1 class="mb20" style="font-size: 3.8rem;">阿布跑跑<span style="color: #28bff7;font-size: 5.6rem;">智慧</span>鞋垫</h1>
        <p class="mb20 gray" style="font-size: 2.6rem;">让每一步都放心</p>
        <p class="gray bold" style="font-size: 1.3rem;">三重定位 | 安全守护 | 历史轨迹 | 多人协助</p>
    </div>
  </el-container>
</template>

<script>
import ab01 from '../assets/ab_01.png'
export default {
  name: 'SilderPage01',
  data () {
    return {
      ab01
    }
  }
}
</script>