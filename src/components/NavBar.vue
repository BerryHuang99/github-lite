<template>
    <div class="nav-bar">
        <img src="../assets/logo.png">
        <el-input @keyup.enter.native="search" v-model="input" 
        class="input" placeholder="your github nickname" prefix-icon="el-icon-search"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
        }
    },
    methods: {
        search: function () {
            this.$emit('search', this.input);
            this.input = '';
        }
    }
    
}
</script>

<style scoped>
.nav-bar {
    height: 50px;
    min-width: 1300px;
    border-bottom: 2px solid #409EFF;
}
img {
    height: 40px;
    margin: 5px 0px 5px 30px;
    display: inline-block;
    float: left;
}
.input {
    width: 300px;
    margin: 5px;
    float:left;
}
</style>
