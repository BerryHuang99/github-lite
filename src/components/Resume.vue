<template>
    <div class="resume">
        <el-card :body-style="{ padding: '0px' }">
            <img v-bind:src="avatar" class="image">
            <div class="profile" style="padding: 14px;">
                <div class="name">{{name}}</div>
                <div class="username">{{userName}}</div>
                <div class="sign">{{profile}}</div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Resume",
    data() {
        return {
            name: 'Berry Huang',
            userName: 'BerryHuang99',
            avatar: '/static/avatar.png',
            profile: 'Live & create for freedom. Respect multielement.',
            location: '',
            website: ''
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