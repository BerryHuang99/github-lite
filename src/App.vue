<template>
  <div id="app">
    <nav-bar @search="search"></nav-bar>

    <div v-if="user.exist">
      <el-row class="main">
        <el-col :span="6">
          <resume :user="user"></resume>
        </el-col>
        <el-col :span="18">
          <profile-nav :reNum="reNum" :sNum="sNum"></profile-nav>
          <router-view :repositories="repositories" :overview="overview" :stars="stars"/>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import Resume from './components/Resume'
import NavBar from './components/NavBar'
import ProfileNav from './components/ProfileNav'
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      user: {
        name: '',
        avatar: '',
        nickName: '',
        biography: '',
        location: '',
        blog: '',
        exist: false,
      },
      repositories: '',
      stars: '',
    }
  },
  computed: {
    reNum: function () {
      return this.repositories.length;
    },
    sNum: function () {
      return this.stars.length;
    },
    overview: function () {
      var overview = this.repositories;
      overview.reverse();
      if (this.reNum > 6) {
       overview = overview.slice(0, 6);
      } else {
        overview = overview.slice(0, reNum);
      }
      this.repositories.reverse();
      return overview;
    }
  }
  ,
  methods: {
    search: function (input) {
      axios.get('https://api.github.com/users/' + input)
      .then(res => {
          this.user.exist = true;
          this.user.name = res.data.name;
          this.user.avatar = res.data.avatar_url;
          this.user.nickName = res.data.login;
          this.user.biography = res.data.bio;
          this.user.location = res.data.location;
          this.user.blog = res.data.blog;
      })
      .catch(error => {
        alert(error);
        this.user.exist = false;
      });
      axios.get('https://api.github.com/users/' + input + '/repos')
      .then(res => {
        this.repositories = res.data;
      });
      axios.get('https://api.github.com/users/' + input + '/starred')
      .then(res => {
        this.stars = res.data;
      });
    },
  },
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
