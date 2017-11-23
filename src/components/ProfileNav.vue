<template>
    <div class="profile-nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/">Overview</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/repositories">Repositories</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/stars">Stars</router-link></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
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
        height: 100%;
        width: 100%;
    }
</style>
