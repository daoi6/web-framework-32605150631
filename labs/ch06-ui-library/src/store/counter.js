import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // state 是函数（返回对象），Pinia 的固定写法
  state: () => ({
    count: 0
  }),
  getters: {
    // 箭头函数收 state：state.count 变，double 自动重算
    double: (state) => state.count * 2      // 补全：double 是 count 的几倍？
  },
  actions: {
    increment() {
      this.count++                                // 补全：没有 mutations 了，actions 里直接改谁？
    },
    decrement() {
      this.count--
    }
  }
})