import Vue from 'vue'
import Vuex from 'vuex'

import giphyModule from './modules/giphy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    giphyModule: {
      namespaced: true,
      ...giphyModule
    }
  }
})
