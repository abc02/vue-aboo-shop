 <template>
 <el-row v-if="selectSpecDatas && specDatas">
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <el-row v-for="(specData, outerIndex) in specDatas" :key="outerIndex">
      <el-row>
        <el-col class="h3">{{specData.specName}}</el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio
            border
            v-model="selectSpecDatas[specData.specId]"
            v-for="(spec, innerIndex) in specData.specSub"
            :label="spec.Cid"
            :key="innerIndex">{{spec.Name}}</el-radio>
        </el-col>
      </el-row>
    </el-row>
   </el-col>
 </el-row>
</template>

<script>
export default {
  name: 'ProductSpceDatas',
  props: ['selectSpecDatas', 'specDatas']
}
</script>
