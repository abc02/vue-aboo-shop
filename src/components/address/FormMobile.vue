<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="start" align="middle">
      <el-col :span="24" class="pt10 pb10 pl10 pr10 bg-gray relative">
          {{title}}
         <i class="el-icon-close absolute-middle-right mr20 h3" v-show="!isFirst" @click="close"></i>
      </el-col>
    </el-row>
    <Form :type="type" :instance="instance" :isFirst="isFirst" />
  </el-container >
</template>

<script>
import Form from './Form.vue'
export default {
  name: 'FormMoblie',
  props: ['type', 'instance', 'isFirst'],
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
