<style lang="scss">
.aboo {
  height: 80%;
  height: 80vh;
  background-color: #f6655e;
  color: white;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .preview-container {
    .preview-item {
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .preview {
          width: 336px;
          display: none;
        }
        .text {
          width: 400px;
          width: 18vw;
          cursor: default;
          display: none;
          position: relative;
          .text-container {
            position: absolute;
            margin-top: 24px;
            margin-top: 3vh;
            p {
              margin-top: 8px;
              margin-top: 1vh;
            }
          }

          .bullets {
            // margin-bottom: 3vh;
            display: flex;
            li {
              font-size: 0;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background-color: rgba($color: white, $alpha: 0.6);
              margin-right: 1vh;
              cursor: pointer;
              &.active {
                background-color: white;
              }
            }
          }
        }
      }

      &.active {
        .preview,
        .text {
          display: block;
        }
      }
    }
  }
}
</style>

<template>
  <div class="aboo">
    <el-container class="wraper">
      <el-row class="container">
        <ul class="preview-container">
          <li class="preview-item"
            v-for="(item, index) in list"
            :key="index"
            :class="activeIndex === index ? 'active' : ''"
            >
            <div class="container" >
              <div class="preview">
                <img class="preview-image" :src="item.image" alt="preview-01" />
              </div>
              <div class="text">
                <ul class="bullets">
                  <li v-for="(bullet, idx) in 4"
                    :key="idx"
                    :class="activeIndex === idx ? 'active' : ''"
                    @mouseover="handleMouseover(idx)"
                    >{{bullet}}</li>
                </ul>
                <div class="text-container">
                  <h1>{{item.title}}</h1>
                  <p>{{item.p}}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </el-row>
    </el-container>
  </div>
</template>
<script>
import preview01 from 'assets/preview-01.png'
import preview02 from 'assets/preview-02.png'
import preview03 from 'assets/preview-03.png'
import preview04 from 'assets/preview-04.png'
export default {
  name: 'Aboo',
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
