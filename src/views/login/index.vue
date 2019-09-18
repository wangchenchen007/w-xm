<template>
  <div class="login">
    <!-- 登录 -->
    <van-nav-bar title="登录" />
    <!-- 输入框 -->
    <van-cell-group name>
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="user.code" type="password" label="验证码" placeholder="请输入验证码" required />
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="v-btn">
      <van-button type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.v-btn {
  padding: 20px;
  .van-button {
    width: 100%;
  }
}
</style>
