<template>
  <el-container direction="vertical">

  </el-container>
</template>

<script>
export default {
  name: 'Good',
  data () {
    return {
      list: null
    }
  },
  methods: {
    redirectToCart () {
      this.$emit('redirectToCart')
    }
  }
}
</script>
