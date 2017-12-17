<template>
    <div class="profile-nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/">Overview</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/repositories">Repositories<i>{{reNum}}</i></router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/stars">Stars<i>{{sNum}}</i></router-link></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        props: ['reNum','sNum'],
        data() {
            return {
                activeIndex: '1'
            }
        }
    }
</script>

<style scoped>
    a {
        display: inline-block;
        padding: 0px 25px;
        width: 100%;
        height: 100%;
    }
    li {
        padding: 0px;
    }
</style>
