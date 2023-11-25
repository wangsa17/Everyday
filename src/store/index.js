// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    toastData: null,
  },
  mutations: {
    setToastData(state, data) {
      state.toastData = data;
    },
    clearToastData(state) {
      state.toastData = null;
    },
  },
  actions: {
    showToast({ commit }, data) {
      commit('setToastData', data);
    },
    clearToast({ commit }) {
      commit('clearToastData');
    },
  },
  getters: {
    toastData: (state) => state.toastData,
  },
});
