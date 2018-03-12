<template>
  <el-container direction="vertical" style="height: 80vh; background-color: #f6655e; color: white;" class="relative">
    <el-row type="flex" justify="center" align="middle"
        class="absolute-middle-center"
        v-for="(item, index) in list" :key="index"
        :style="activeIndex === index ? 'visibility: visible;' : 'visibility: hidden;'">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <img :src="item.image" :alt="item.title" style="width: 336px; height: 665px" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="ml20">
        <ul class="mb20">
          <li v-for="(bullet, index) in list"
            :key="index"
            class="mr10"
            style="width: 16px; height: 16px; border-radius: 50%;display: inline-block;cursor: default;"
            :style="activeIndex === index ? 'background-color: white;' : 'background-color: rgba(255, 255, 255,0.6);'"
            @mouseover="handleMouseover(index)"></li>
        </ul>
        <h1 class="mb20">{{item.title}}</h1>
        <p style="line-height: 1.6;">{{item.p}}</p>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import preview01 from '../assets/preview-01.png'
import preview02 from '../assets/preview-02.png'
import preview03 from '../assets/preview-03.png'
import preview04 from '../assets/preview-04.png'
export default {
  name: 'Products',
  data () {
    return {
      activeIndex: 0,
      list: [
        {
          image: preview01,
          title: '精准定位',
          p:
            '室内室外各种环境自动切换定位模式手机APP实时查看最新定位信息，孩子去哪，轻松知晓'
        },
        {
          image: preview02,
          title: '电子围栏',
          p:
            '通过下载手机APP“阿布跑跑”设置电子围栏，给孩子一个安全活动区域，超出设定安全区域，将发送报警信息至您的手机APP。'
        },
        {
          image: preview03,
          title: '轨道回放',
          p:
            '历史轨迹查询行走路线通过下载手机APP“阿布跑跑”可以查询行走路线和停留的时间，随时掌握TA的安全，贴心的安全卫士'
        },
        {
          image: preview04,
          title: '多人协助',
          p:
            '可多人查看，全家呵护通过下载手机APP“阿布跑跑”可以同时多人查看，多一个人查看，多一份呵护'
        }
      ]
    }
  },
  methods: {
    handleMouseover (index) {
      this.activeIndex = index
    }
  }
}
</script>
