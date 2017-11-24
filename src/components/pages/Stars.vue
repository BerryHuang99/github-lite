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
        data() {
            return {
                repositories: [{
                name: 'name',
                description: 'Personal experiments from Northeastern University.',
                language: 'html',
                update: 'Up date 30 days ago',
            }],
            }
        },
        components: {
            Repository
        }
    }
</script>

<style scoped>
    
</style>
