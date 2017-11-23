<template>
    <div class="repository">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>name</span>
            </div>
            <div class="text item">
                Personal experiments from Northeastern University.
            </div>
            <div class="language">
                <span class="color-circle"></span>html
                <span class="update">update 30</span>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Repository'
    }
</script>

<style scoped>
    .repository {
        margin: 20px;
    }
    .language {
        margin: 20px 0px 10px;
    }
    .color-circle {
        display: inline-block;
        width: 11px;
        height: 11px;
        background-color: #409EFF;
        border-radius: 50%;
        margin: 0px 5px;
    }
    .update {
        margin: 0px 30px;
    }
</style>