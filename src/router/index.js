import Vue from 'vue'
import Router from 'vue-router'
import WorkSpace from '@/components/WorkSpace'

import HelpPanel from '@/components/workspace/HelpPanel.vue'
import ContainersPanel from '@/components/workspace/Containers.vue'
import YAMLPanel from '@/components/workspace/YAML.vue'
import LogsPanel from '@/components/workspace/Logs.vue'
import OptionsPanel from '@/components/workspace/Options.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:workspace',
      name: 'WorkSpace',
      component: WorkSpace,
      children: [
        { path: '', component: HelpPanel },
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
        }
      ]
    }
  ]
})
