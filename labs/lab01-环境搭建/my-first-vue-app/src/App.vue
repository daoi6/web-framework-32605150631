<script>
export default {
  data() {
    return {
      student: {
        name: '32605150631聂宋明'
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>我的第一个Vue应用 - {{ student.name }}</h1>
    <p>热更新测试成功！</p>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}
</style>