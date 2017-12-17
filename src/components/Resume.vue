<template>
    <div class="resume">
        <el-card :body-style="{ padding: '0px' }">
            <img v-bind:src="user.avatar" class="image">
            <div class="profile" style="padding: 14px;">
                <div class="name">{{user.name}}</div>
                <div class="username">{{user.nickName}}</div>
                <div class="sign">{{user.biography}}</div>
            <div>
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="more">
                        <div class="location"><i class="el-icon-location">{{user.location}}</i></div>
                        <div class="website"><a href="www.huangyufeng.com"><i class="el-icon-loading"></i>{{user.blog}}</a></div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Resume",
    props: ['user'],
    data() {
        return {
            activeNames: ['1'],
        }
    }
}
</script>

<style scoped>
.resume {
    margin-right: 20px;
}
.image {
    width: 100%;
    border-radius: 5px;
}
.profile {
    color: #666;
}
.sign {
    margin: 10px 0;
    font-size: 14px;
}
.name {
    color: #000;
    font-weight: bold;
    font-size: 20px;
}
.username {
    font-size: 20px;
}
</style>