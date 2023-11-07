// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import { mapActions, mapGetters } from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category: {
      namespaced: true,
      state: {
        selectedCategory: null,
      },
      mutations: {
        setSelectedCategory(state, category) {
          state.selectedCategory = category;
        },
      },
      actions: {
        setCategory({ commit }, category) {
          commit('setSelectedCategory', category);
        },
      },
      getters: {
        selectedCategory(state) {
          return state.selectedCategory;
        },
      },
    },
  },
});
