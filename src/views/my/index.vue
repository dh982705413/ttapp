<template>
  <div class="my-container">
    <van-cell-group class="user-info">
      <div v-if="token">
        <van-cell
          center
          class="base-info"
          :border="false"
        >
          <template #icon>
            <van-image
              width="2rem"
              height="2rem"
              fit="cover"
              :src="userInfo.photo"
              lazy-load
              round
            >
              <template #error>
                暂无头像
              </template>
            </van-image>
          </template>
          <template #title>
            <span class="name">{{userInfo.name}}</span>
          </template>
          <template #default>
            <van-button
              round
              size="small"
              @click="$router.push('/editUserInfo')"
            >编辑资料</van-button>
          </template>
        </van-cell>
        <ul class="data-list">
          <li
            v-for="(item,index) in list"
            :key="index"
          >
            <span class="num">{{userInfo[item.desc]}}</span>
            <span class="title">{{item.title}}</span>
          </li>
        </ul>
      </div>
      <div
        v-else
        class="no-login"
      >
        <van-image
          src="/img/nologin.png"
          width="70px"
          height="70px"
          @click="goLogin"
        ></van-image>
        <span class="text">登录 / 注册</span>
      </div>
    </van-cell-group>
    <van-grid
      :column-num="2"
      :border="false"
    >
      <van-grid-item class="baseicon">
        <i
          class="iconfont iconshoucang shoucang"
          slot="icon"
        ></i>
        <span slot="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="baseicon">
        <i
          class="iconfont iconlishi lishi"
          slot="icon"
        ></i>
        <span slot="text">历史</span>
      </van-grid-item>
    </van-grid>
    <div class="chat-info">
      <van-cell
        title="消息通知"
        is-link
      />
      <van-cell
        title="小智同学"
        is-link
      />
    </div>
    <div
      class="logout-btn-wrap"
      v-if="token"
    >
      <van-button
        block
        class="logout-btn"
        @click="logout"
      >退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { fetchUserInfo } from '@/api/user'
import { mapGetters } from 'vuex'
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
    this.token && this.getUserInfo()
  },
  computed: {
    ...mapGetters(['token'])
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
    },
    goLogin() {
      this.$router.push('/login')
    },
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.my-container {
  .user-info {
    background: url(/img/banner.png);
    .van-cell {
      background-color: transparent;
    }
    .base-info {
      padding: 38px 16px 12px;
      .name {
        margin: 0 10px;
        color: #fff;
        font-size: 15px;
      }
    }
    .data-list {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #fff;
        .num {
          font-size: 18px;
        }
        .title {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
    .no-login {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 74px 0 38px;
      .text {
        color: #fff;
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
  .baseicon {
    i {
      font-size: 25px;
    }
    span {
      margin-top: 8px;
      font-size: 15px;
      letter-spacing: 2px;
      text-align: center;
    }
    .shoucang {
      color: #eb5253;
    }
    .lishi {
      color: #ff9d1d;
    }
  }
  .chat-info {
    margin: 5px 0;
  }
  .logout-btn-wrap {
    .logout-btn {
      color: #dd7d7d;
      font-size: 15px;
      height: 50px;
    }
  }
}
</style>
