import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const users = {
  namespaced: true,
  state: {
    name: ''
  },
  mutations: {
    setName(state,data) {
      state.name = 234
    }
  }
}
const store = new Vuex.Store({
    state: {
        token: '',
        userInfo: ''
    },
    mutations: {
      setToken(state, data) {
        state.token = data;
      },
      setUser(state, data) {
        state.userInfo = data
      }
    },
    modules: {
      users
    },
    plugins: [createPersistedState({
      key: 'test'
      // paths: ['users'],
      // storage: {
      //   getItem: key => localStorage.getItem(key),
      //   setItem: (key, value) =>
      //     localStorage.setItem(key, value),
      //   removeItem: key => localStorage.removeItem(key)
      // }
      // setState(key, value) {
      //   console.log("setState triggered");
      //   localStorage.setItem(key, value);
      // }
    })]
})

export default store;
