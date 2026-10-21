<template>
  <div class="lab">
    <h2>实验05｜props 父传子（单向数据流）</h2>
    <p class="muted">单向数据流：props只读，子组件不能直接修改props；required代表必传</p >
    <div class="pair">
      <PriceBox :price="2999" :count="2" />
      <PriceBox :price="4999" :count="1" />
    </div>
  </div>
</template>

<script>
import PriceBox from './PriceBox.vue'
export default {
  name: 'PropsLab',
  components: { PriceBox }
}
</script>