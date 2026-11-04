import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0                    // 补全：公共计数的初始值（数字）
  },
  mutations: {
    increment(state) {
      state.count++                   // 补全：收银员亲手把哪个货架数据加一？
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0        // 隔壁卡片也能喊收银员"清零"——同一间仓库
    }
  }
})