<template>
    <el-row>
        <el-col :span="24">
            <repository></repository>
        </el-col>
    </el-row>
</template>

<script>
import Repository from "../Repository";

    export default {
        components: {
            Repository
        }
    }
</script>

<style scoped>
    
</style>
