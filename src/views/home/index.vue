<template>
  <div class="home-container">
    <!--导航栏 -->
    <van-nav-bar class="search-nav-bar">
      <template #title>
        <div
          class="search-box"
          @click="$router.push('/search')"
        >
          <i class="iconfont iconsousuo"></i>搜索
        </div>
      </template>
    </van-nav-bar>
    <!-- 导航栏 end -->
    <!-- 标签页 -->
    <van-tabs
      v-model="active"
      color="#3296fa"
      line-width="16px"
      :border="true"
      swipeable
      title-active-color="#333333"
      title-inactive-color="#777777"
    >
      <van-tab
        v-for="item in channelList"
        :title="item.name"
        :key="item.id"
        class="tab-content"
      >
        <article-list :channel="item"></article-list>
      </van-tab>
    </van-tabs>
    <!-- 标签页 end -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/channel'
import ArticleList from '@/components/ArticleList'
export default {
  name: 'home',
  data() {
    return {
      active: 0,
      channelList: []
    }
  },
  components: {
    ArticleList
  },
  created() {
    this.loadChannels()
  },
  methods: {
    async loadChannels() {
      const res = await getUserChannels()
      this.channelList = res.data.channels
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  .search-nav-bar {
    background-color: #3296fa;
    height: 50px;
    .search-box {
      background-color: #5babfb;
      width: 280px;
      padding: 7px 0;
      border-radius: 20px;
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
