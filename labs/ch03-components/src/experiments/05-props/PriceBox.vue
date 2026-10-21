<!-- PriceBox.vue —— 子组件：对象方式声明 props + computed（教材例3-10 同构） -->
<template>
  <div class="mini">
    <h3>PriceBox</h3>
    <p>手机价格：{{ price }}，购买数量：{{ count }}，总计：{{ total }}</p >
  </div>
</template>

<script>
export default {
  name: 'PriceBox',
  props: {
    price: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    total() {
      return this.price * this.count
    }
  }
}
</script>

<style scoped>
.mini {
  border: 2px solid var(--accent);
  border-radius: 8px;
  padding: 12px;
}
</style>