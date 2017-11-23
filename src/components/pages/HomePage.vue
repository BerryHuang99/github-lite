<template>
  <div class="home">
      <el-row>
        <el-col :span="12">
          <repository></repository>
        </el-col>
        <el-col :span="12">
          <repository></repository>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Repository from '../Repository'

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components: {
    Repository
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
