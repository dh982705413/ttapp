<template>
  <div class="my-container my-userinfo">
    <van-cell-group class="user-info">
      <van-cell
        center
        :border="false"
        class="base-info"
      >
        <template #icon>
          <van-image
            round
            width="2rem"
            height="2rem"
            fit="cover"
            v-lazy="userInfo.photo"
          />
        </template>
        <template #default>
          <van-button
            round
            size="small"
          >编辑资料</van-button>
        </template>
        <template #title>
          <span class="name">{{userInfo.name}}</span>
        </template>
      </van-cell>
      <van-grid :border="false">
        <van-grid-item
          v-for="(item, index) in list"
          :key="index"
          class="info-list"
        >
          <span
            slot="icon"
            class="num"
          >{{ userInfo[item.desc] }}</span>
          <span
            slot="text"
            class="text"
          >{{ item.title }}</span>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-grid
      :column-num="2"
      :border="false"
      class="tab-info"
    >
      <van-grid-item class="shoucang">
        <template #icon>
          <i class="iconfont iconshoucang"></i>
        </template>
        <template #text>
          <span>收藏</span>
        </template>
      </van-grid-item>
      <van-grid-item class="lishi">
        <template #icon>
          <i class="iconfont iconlishi"></i>
        </template>
        <template #text>
          <span>历史</span>
        </template>
      </van-grid-item>
    </van-grid>
    <div class="info">
      <van-cell
        title="消息通知"
        is-link
      />
      <van-cell
        title="小智同学"
        is-link
      />
    </div>
    <div class="logout-btn-wrap">
      <van-button
        block
        class="logout-btn"
      >退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { fetchUserInfo } from '@/api/user'
export default {
  name: 'my',
  data() {
    return {
      userInfo: {},
      list: [
        { title: '头条', desc: 'art_count' },
        { title: '关注', desc: 'follow_count' },
        { title: '粉丝', desc: 'fans_count' },
        { title: '获赞', desc: 'like_count' }
      ]
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      try {
        const res = await fetchUserInfo()
        this.userInfo = res.data
        console.log(res)
      } catch (error) {
        this.$toast.fail('获取用户信息失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-container {
  .user-info {
    background-color: #3296fa;
    .base-info {
      padding: 38px 8px 11px;
      .name {
        margin-left: 10px;
        color: #fff;
      }
    }
    .data-info {
      .van-grid-item__content {
        background-color: red;
      }
    }
    .info-list {
      color: #fff;
      .text {
        font-size: 16px;
      }
      .num {
        font-size: 16px;
      }
    }
  }
  .tab-info {
    background-color: #fff;
    .shoucang {
      i {
        font-size: 24px;
        color: red;
      }
    }
    .lishi {
      i {
        font-size: 24px;
        color: yellow;
      }
      font-size: 24px;
    }
    span {
      font-size: 18px;
      margin-top: 5px;
      letter-spacing: 2px;
    }
  }
  .info {
    margin: 10px 0;
  }
  .logout-btn {
    color: red;
  }
}
</style>
