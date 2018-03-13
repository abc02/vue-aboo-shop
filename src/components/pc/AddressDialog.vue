<template>
  <el-dialog
    :visible="isDialog"
    width="60vw"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="true">
    <el-row type="flex" justify="start" align="middle" slot="title">
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">{{title}}</el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="text-right">
        <el-button type="text" icon="el-icon-close" @click="handleDialog"></el-button>
      </el-col>
    </el-row>
    <Form :type="type" :instance="instance" />
  </el-dialog>
</template>

<script>
import Form from './Form.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AddressDialog',
  props: ['type', 'instance'],
  components: {
    Form
  },
  computed: {
    ...mapState(['isDialog']),
    title () {
      if (this.type === 'edit') {
        return '编辑地址'
      } else if (this.type === 'add') {
        return '添加并使用新地址'
      }
      return ''
    }
  },
  methods: {
    ...mapMutations(['handleDialog'])
  }
}
</script>
