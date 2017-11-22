<template>
  <div class="home">
      <el-row>
        <el-col :span="24">
          <profile-nav></profile-nav>
        </el-col>
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
import ProfileNav from '../ProfileNav'
import Repository from '../Repository'

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components: {
    Repository,
    ProfileNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
