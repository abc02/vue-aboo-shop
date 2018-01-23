<style scoped>
  h4 {
    font-weight: 600;
  }
  .el-input-number {
    width: 120px;
  }
</style>

<template>
  <el-row>
    <el-container direction="vertical">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="商品" width="600">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="200">
        </el-table-column>
        <el-table-column label="数量" width="200">
          <template slot-scope="scope">
                <el-input-number v-model="scope.row.number" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="subtotal" label="小计" width="200">
        </el-table-column>
        <el-table-column prop="delete" width="80">
        </el-table-column>
      </el-table>
      <el-row :gutter="10" type="flex" align="middle">
        <el-col :span="3" :offset="18">
           合计: {{total}}
        </el-col>
        <el-col :span="3" >
           <el-button type="primary" @click="redirectToBuy">去结算</el-button>
        </el-col>
      </el-row>
    </el-container>
  </el-row>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      tableData: [{
        name: '商品昵称',
        price: 3299,
        number: 2,
        subtotal: 3299,
        delete: true
      }]
    }
  },
  computed: {
    total () {
      if (this.tableData && this.tableData.length) {
        let total = 0
        this.tableData.forEach(shop => {
          total += shop.price * shop.number
        })
        return total
      }
    }
  },
  methods: {
    redirectToBuy () {
      location.href = 'buy.html'
    },
    handleChange (value) {
      // console.log(value);
    }
  }
}
</script>
