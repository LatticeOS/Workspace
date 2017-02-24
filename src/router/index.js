import Vue from 'vue'
import Router from 'vue-router'
import WorkSpace from '@/components/WorkSpace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WorkSpace',
      component: WorkSpace
    }
  ]
})
