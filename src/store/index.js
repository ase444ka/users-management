import Vue from 'vue'
import Vuex from 'vuex'
// import { authApi, mainPageApi } from '@/api'
import { authApi } from '@/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },

  mutations: {
    SET_LOGGED_IN(state) {
      state.loggedIn = true
    },
    SET_LOGGED_OUT(state) {
      state.loggedIn = false
    },
  },

  actions: {
    async login({ commit }, payload) {
      const data = await authApi.login(payload)
      if (data) {
        commit('SET_LOGGED_IN')
        return true
      } else {
        return false
      }
    },

    logout({ commit }) {
      commit('SET_LOGGED_OUT')
    },
  },

  strict: true,
})
