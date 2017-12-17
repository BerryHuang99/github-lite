<template>
    <el-row>
        <el-col :span="24" v-for="item in stars">
            <repository :item="item"></repository>
        </el-col>
    </el-row>
</template>

<script>
import Repository from "../Repository";

    export default {
        name: 'Stars',
        props: ['stars'],
        components: {
            Repository
        }
    }
</script>

<style scoped>
    
</style>
