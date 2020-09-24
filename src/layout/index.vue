<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/home"
        name="/home"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="comment-o"
        to="/qa"
        name="/qa"
      >问答</van-tabbar-item>
      <van-tabbar-item
        icon="video-o"
        to="/video"
        name="/video"
      >视频</van-tabbar-item>
      <van-tabbar-item
        icon="user-o"
        to="/my"
        name="/my"
      >
        我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return { active: this.$route.path }
  }
}
</script>

<style lang="scss" scoped></style>
