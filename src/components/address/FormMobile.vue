<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="middle">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="mt10 mb10 pl10 pr10 relative">
          {{title}}
         <i class="el-icon-close button-right" @click="close"></i>
      </el-col>
    </el-row>
     <Form :type="type" :instance="instance"/>
  </el-container >
</template>

<script>
import Form from './Form.vue'
export default {
  name: 'FormMoblie',
  props: ['type', 'instance'],
  components: {
    Form
  },
  computed: {
    title () {
      if (this.type === 'edit') {
        return '编辑地址'
      } else if (this.type === 'add') {
        return '新增地址'
      }
      return ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
