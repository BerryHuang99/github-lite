<template>
  <div class="home">
      <el-row>
        <el-col class="item" :span="12" v-for="item in overview">
          <repository :item="item"></repository>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Repository from '../Repository'

export default {
  name: 'HomePage',
  props: ['overview'],
  components: {
    Repository
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    height: 200px;
  }
</style>
