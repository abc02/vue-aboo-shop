<template>
   <img :src="LogInBg" alt="bg" style="width: 315px; height: 223px;"/>
</template>
<script>
import LogInBg from 'assets/login-bg.png'
export default {
  name: 'LeftBg',
  data () {
    return {
      LogInBg
    }
  }
}
</script>
