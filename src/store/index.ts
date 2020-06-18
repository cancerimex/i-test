import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deck: null
  },
  mutations: {
    SET_DECK (state, deck) {
      state.deck = deck;
    }
  },
  actions: {
    async createDeck({ commit }, payload) {

      commit('SET_DECK', payload);
    }
  },
  getters: {
    deck(state) {
      return state.deck;
    }
  }
});
