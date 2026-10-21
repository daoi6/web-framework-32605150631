<template>
  <div class="lab">
    <h2>实验04｜scoped样式隔离 + :deep()</h2>
    <p class="muted">加 scoped 之后，父子同名class互不污染；:deep() 可以穿透修改子组件样式</p >
    <div class="box">
      父组件 ScopedLab 的 .box（绿色）
      <ScopedChild />
    </div>
  </div>
</template>

<script>
import ScopedChild from './ScopedChild.vue'
export default {
  name: "ScopedLab",
  components: { ScopedChild }
}
</script>

<style scoped>
.box{
  border:2px solid green;
  border-radius:8px;
  padding:14px;
}
/* :deep() 演示，放开这个就可以穿透修改子组件样式 */
/* :deep(.box){
  color:orange;
} */
</style>