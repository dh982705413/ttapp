<template>
  <div class="login-container">
    <van-nav-bar
      title="注册 / 登录"
      left-arrow
      @click-left="$router.go(-1)"
      class="app-nav-bar"
    />
    <van-form
      @submit="onLogin"
      @failed="onFailed"
      :show-error="false"
      :show-error-message="false"
      :scroll-to-error="true"
      ref="login-form"
    >
      <van-field
        v-model="user.mobile"
        type="tel"
        placeholder="请输入手机号"
        name="mobile"
        :rules="formRules.mobile"
      >
        <template #left-icon>
          <i class="iconfont iconshouji"></i>
        </template>
      </van-field>
      <van-field
        left-icon="smile-o"
        v-model="user.code"
        placeholder="验证码"
        name="code"
        :rules="formRules.code"
      >
        <template #left-icon>
          <i class="iconfont iconyanzhengma c"></i>
        </template>
        <template #button>
          <van-count-down
            :time="60*1000"
            format="ss秒后重试  "
            v-if="isSend"
            @finish="isSend=false"
          />
          <van-button
            v-else
            size="small"
            round
            color="#ededed"
            @click.prevent="sendCode"
            :loading="isLoading"
          >发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          block
          class="login-btn"
        >登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sms } from '@/api/user'
import { setItem } from '@/utils/auth'
export default {
  name: 'login',
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [{ required: true, message: '请填写手机号' }, { pattern: /^1[3456789]\d{9}$/, message: '手机号格式有误' }],
        code: [{ required: true, message: '请填写验证码' }, { pattern: /\d{6}$/, message: '验证码格式有误' }]
      },
      isSend: false,
      isLoading: false
    }
  },
  methods: {
    async onLogin() {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
      try {
        const res = await login(this.user)
        this.$store.dispatch('user/setToken', res.data.token)
        this.$store.dispatch('user/setRefToken', res.data.refresh_token)
        setItem(res.data)
        this.$toast.success('登录成功')
        this.$router.back()
      } catch (error) {
        this.$toast.fail('登录失败')
      }
    },
    async sendCode() {
      try {
        await this.$refs['login-form'].validate('mobile')
        this.isLoading = true
        await sms(this.user.mobile)
        this.isSend = true
      } catch (err) {
        let message = ''
        if (err && err.response && err.response.status === 429) {
          message = '发送太频繁，请稍后重试'
        } else if (err.name === 'mobile') {
          message = err.message
        } else {
          message = '发送失败,请稍后重试'
        }
        this.$toast.fail(message)
      }
      this.isLoading = false
    },
    onFailed(error) {
      this.$toast.fail(error.errors[0].message)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  background-color: #f1f1f1;
  .van-field {
    display: flex;
    align-items: center;
  }
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      border-radius: 5px;
      background-color: #6db4fb;
      color: #fff;
    }
  }
}
</style>
