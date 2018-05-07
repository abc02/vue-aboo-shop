 <template>
 <el-container direction="vertical" v-if="selectSpecDatas && specDatas" class="pt20 pl10 pr10">
    <el-container direction="vertical" v-for="(specData, outerIndex) in specDatas" :key="outerIndex">
      <el-row type="flex" justify="strt" align="middle" class="pb20 h3">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="h3">{{specData.specName}}</el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle" class="border-bottom pb20 h1">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-radio
            border
            :value="selectSpecDatas[specData.specId]"
            @change="handleSpecDatasMutation({ key: specData.specId, value: spec.Cid })"
            v-for="(spec, innerIndex) in specData.specSub"
            :label="spec.Cid"
            :key="innerIndex">{{spec.Name}}</el-radio>
        </el-col>
    </el-row>
  </el-container>
 </el-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('products')
export default {
  name: 'ProductSpceDatas',
  computed: {
    ...mapState(['specDatas', 'selectSpecDatas'])
  },
  methods: {
    ...mapMutations(['handleSpecDatasMutation'])
  }
}
</script>
