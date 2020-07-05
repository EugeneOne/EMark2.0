import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import markDown from './modules/markDown';
import article from './modules/article'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    markDown,
    article
  },
  strict: process.env.NODE_ENV !== 'production',
  // vuex持久化，存储到seesionStorage
  // plugins: [createPersistedState({ storage: window.sessionStorage })],
});

export default store;
