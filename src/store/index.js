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
    projects: []
  },
  mutations: {
    REFRESH_PROJECT_LIST: (state, { projects }) => {
      state.projects = []
      for (let key in projects) {
        if (projects.hasOwnProperty(key)) {
          state.projects.push(projects[key])
        }
      }
    }
  },
  getters: {
    projects: state => state.projects,
    projects_active: state => state.projects.filter(item => item.active)
  },
  actions: {
    REFRESH_PROJECT_LIST ({ commit }) {
      Vue.http.get('projects').then(response => {
        let body = response.body
        let projects = {}
        for (let key in body['projects']) {
          if (body['projects'].hasOwnProperty(key)) {
            let shortName = key.toLowerCase().replace(/[^a-z0-9]/g, '')
            projects[shortName] = {
              'key': key,
              'short_name': shortName,
              'working_dir': body['projects'][key]
            }
          }
        }
        let active = body['active'].filter(item => typeof item === 'string')
        for (let key in active) {
          projects[active[key]]['active'] = true
        }
        commit('REFRESH_PROJECT_LIST', { projects })
      })
    }
  },
  modules: {
    compose
  },
  strict: debug
})
