import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:
      [
        {
          username:'admin',
          password:'admin'
        },
        {
          username:'user',
          password:'user'
        }
      ],
      userLogin:{}
  },
  mutations: {
    SET_USER_LOGIN(state,payload){
      state.userLogin=payload
    }
  },
  actions: {
    setUserLogin({commit},payload){
      commit('SET_USER_LOGIN',payload)
    }
  }
})
