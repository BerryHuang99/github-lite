<template>
  <div class="home">
      <el-row>
        <el-col :span="12" v-for="item in repositories">
          <repository :item="item"></repository>
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
      repositories: [{
        name: 'name',
        description: 'Personal experiments from Northeastern University.',
        language: 'html'
      },
      {
        name: 'name2',
        description: 'Personal experiments from Northeastern University.',
        language: 'html'
      }],
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
