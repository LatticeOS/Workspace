import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import compose from './modules/compose'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  state: {
    projects: [],
    projectName: 'vue-env'
  },
  modules: {
    compose
  },
  strict: debug
})
