<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="article in list"
          :key="article.art_id"
          :title="article.title"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article'
export default {
  name: 'article-list',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      timestamp: Date.now()
    }
  },
  methods: {
    async onLoad() {
      if (this.refreshing) {
        this.list = []
        this.refreshing = false
      }
      const res = await getArticleList({
        channel_id: this.channel.id,
        timestamp: this.timestamp,
        with_top: 1
      })
      this.list = this.list.concat(res.data.results)
      this.loading = false
      if (res.data.results.length) {
        this.timestamp = res.data.pre_timestamp
      } else {
        this.finished = true
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }

  }
}
</script>

<style lang="scss" scoped>
.article-list {
  position: fixed;
  top: 94px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: scroll;
}
</style>
