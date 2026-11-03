<template>
  <div class="page">
    <h2>🔐 登录页</h2>
    <p class="muted">用户中心（/center）是"会员区"——没有 token 会被守卫拦到这里。</p>

    <p>当前登录状态：<b :class="isLogin ? 'ok' : 'no'">{{ isLogin ? '已登录（token 存在）' : '未登录（无 token）' }}</b></p>

    <button v-if="!isLogin" @click="login">登录（写入 token 并去用户中心）</button>
    <button v-else @click="logout">退出登录（删 token）</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return { isLogin: !!localStorage.getItem('token') }
  },
  methods: {
    login() {
      // 已补全：写入 token
      localStorage.setItem('token', 'abc123')
      this.isLogin = true
      // 已补全：编程式跳转去用户中心
      this.$router.push('/center')
    },
    logout() {
      localStorage.removeItem('token')
      this.isLogin = false
    }
  }
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--warn);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
  max-width: 480px;
}
.ok { color: var(--primary-dark); }
.no { color: #c0392b; }
.muted { color: var(--muted); }
</style>
