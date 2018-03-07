<template>
  <el-container>
     <el-row type="flex" justify="center" align="middle">
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
          <el-row>
            <el-col>订单提交成功，请尽快完成付款</el-col>
          </el-row>
          <el-row>
            <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">订单号：{{orderId}}</el-col>
          </el-row>
        </el-col>
      </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'OrderDetailPreview',
  props: ['orderId']
}
</script>
