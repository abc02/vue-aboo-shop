<template>
  <el-container class="relative height-100">
    <el-container class="absolute-middle-center">
      <div class="relativer mr20">
        <img :src="preview" alt="preview" style="width: 237px; height: 399px" />
        <img :src="ab02" alt="ab02" style="width: 117px; height: 150px" class="absolute-bottom-left" />
      </div>
      <div>
        <h1 class="mb20" style="color: #f6655e; font-size: 3.8rem;">阿布<span class="ml20"style="color: #28bff7;font-size: 5.6rem;font-style: italic;">跑跑</span></h1>
        <p class="mb20 gray" style="font-size: 2.6rem;">儿童智慧鞋垫APP</p>
        <a  href="http://a.app.qq.com/o/simple.jsp?pkgname=com.gcs.mcj.insole" target="_blank">
          <button class="gray border pt10 pb10 pl20 pr20 mt20"  style="border-radius: 70px;font-size: 2.3rem; background:none;">立即下载</button>
        </a>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import ab02 from '../assets/ab_02.png'
import preview from '../assets/preview.png'
export default {
  name: 'SilderPage02',
  data () {
    return {
      ab02,
      preview
    }
  }
}
</script>

