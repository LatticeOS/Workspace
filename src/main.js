// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueCodeMirror from 'vue-codemirror'
import VueResource from 'vue-resource'
import 'vue-material/dist/vue-material.css'

import App from './App'
import router from './router'

import store from './store'

Vue.config.productionTip = false

Vue.use(VueCodeMirror)
Vue.use(VueMaterial)
Vue.use(VueResource)

Vue.material.registerTheme('default', {
  background: {
    color: 'grey',
    hue: 200
  }
})

Vue.http.options.root = 'http://112.74.30.227:5000/api/v1'
// Vue.http.options.root = '/static/test/v1'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
