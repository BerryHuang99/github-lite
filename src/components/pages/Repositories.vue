<template>
    <el-row>
        <el-col :span="24" v-for="item in repositories">
            <repository :item="item"></repository>
        </el-col>
    </el-row>
</template>

<script>
import Repository from "../Repository";

export default {
    name: 'Repositories',
    props: ['repositories'],
    components: {
        Repository
    }
}
</script>

<style scoped>
    
</style>
