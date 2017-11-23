<template>
  <div id="app">
    <nav-bar></nav-bar>
    <el-row class="main">
      <el-col :span="6">
        <resume></resume>
      </el-col>
      <el-col :span="18">
        <profile-nav></profile-nav>
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Resume from './components/Resume'
import NavBar from './components/NavBar'
import ProfileNav from './components/ProfileNav'

export default {
  name: 'app',
  components: {
    NavBar,
    Resume,
    ProfileNav
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
a {
  text-decoration: none;
  color: #666;
}
.main {
  width: 1200px;
  margin: 30px auto;
}
</style>
