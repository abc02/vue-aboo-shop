<template>
  <el-container direction="vertical">
    <SwiperCommon :instance="silderNames">
      <SilderPage01 slot="SilderPage01" />
      <SilderPage02 slot="SilderPage02" />
    </SwiperCommon>
  </el-container>
</template>

<script>
import SwiperCommon from 'components/SwiperCommon.vue'
import SilderPage01 from './SilderPage01.vue'
import SilderPage02 from './SilderPage02.vue'
export default {
  name: 'Home',
  components: {
    SwiperCommon,
    SilderPage01,
    SilderPage02
  },
  data () {
    return {
      silderNames: ['SilderPage01', 'SilderPage02']
    }
  }
}
</script>
