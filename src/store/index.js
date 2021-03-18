import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    LOGIN(state, payload) {
      state.isLogin = payload.is
      state.isUsername = payload.name
    }
  },
  actions: {},
  modules: {},
});
