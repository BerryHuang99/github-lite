<template>
  <div id="app">
    <nav-bar></nav-bar>
    <el-row class="main">
      <el-col :span="6">
        <resume></resume>
      </el-col>
      <el-col :span="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Resume from './components/Resume'
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: {
    NavBar,
    Resume
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-weight: 300;
}
.main {
  width: 1200px;
  margin: 30px auto;
}
</style>
