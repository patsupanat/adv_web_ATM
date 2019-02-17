import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:
      [
        {
          username:'admin',
          password:'admin',
          balance: 5000
        },
        {
          username:'user',
          password:'user',
          balance : 2000
        }
      ],
      userLogin:{}
  },
  mutations: {
    SET_USER_LOGIN(state,payload){
      state.userLogin=payload
    },
    DISCOUT_BALANCE(state,payload){
      const index = state.users.findIndex(user => user.username === payload.username)
      state.users[index].balance = state.users[index].balance - payload.amount
    },
    ADD_BALANCE(state,payload){
      const index = state.users.findIndex(user => user.username === payload.username)
      state.users[index].balance = state.users[index].balance + payload.amount
    },
    CREATE_USER(state,payload){
      state.users.push(payload)
    }

  },
  actions: {
    setUserLogin({commit},payload){
      commit('SET_USER_LOGIN',payload)
    },
    discoutBalance({commit},payload){
      commit('DISCOUT_BALANCE',payload)
    },
    addBalance({commit},payload){
      commit('ADD_BALANCE',payload)
    },
    setLogout({commit},payload){
      commit('SET_USER_LOGIN',payload)
    },
    createuser({commit},payload){
      commit('CREATE_USER',payload)
    }
  }
})
