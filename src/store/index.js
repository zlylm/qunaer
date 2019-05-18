import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var city = '厦门'
try {
  city = localStorage.getItem('city') || '厦门'
} catch (err) {
}
// 用来存储数据的
const state = {
  city: city
}
// 用来更改state里面的状态值
const mutations = {
  upCity (state, city) {
    state.city = city
    try {
      localStorage.setItem('city', city)
    } catch (err) {
    }
  }
}
const getters = {
  test (state) {
    return state.city + '1'
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
})
export default store
