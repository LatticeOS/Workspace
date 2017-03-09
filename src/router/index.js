import Vue from 'vue'
import Router from 'vue-router'
import WorkSpace from '@/components/WorkSpace'
import WorkSpaceList from '@/components/WorkSpaceList'

import PageView from '@/components/pages/PageView'
import WelcomePage from '@/components/pages/WelcomePage'

import READMEPanel from '@/components/workspace/READMEPanel'
import ContainerPanel from '@/components/workspace/Container'
import ContainersPanel from '@/components/workspace/Containers'
import YAMLPanel from '@/components/workspace/YAML'
import LogsPanel from '@/components/workspace/Logs'
import OptionsPanel from '@/components/workspace/Options'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/new',
      name: 'NewWorkspace',
      component: WorkSpaceList
    },
    {
      path: '/page/:id',
      name: 'Page',
      component: PageView
    },
    {
      path: '/:workspace',
      name: 'WorkSpace',
      component: WorkSpace,
      children: [
        {
          path: 'readme',
          component: READMEPanel
        },
        {
          path: 'containers',
          component: ContainersPanel
        },
        {
          path: 'yaml',
          component: YAMLPanel
        },
        {
          path: 'logs',
          component: LogsPanel
        },
        {
          path: 'options',
          component: OptionsPanel
        },
        {
          path: ':container',
          component: ContainerPanel
        }
      ]
    }
  ]
})
