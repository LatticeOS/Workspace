<template>
    <md-table>
        <md-table-header>
        <md-table-row>
            <md-table-head>Statue</md-table-head>
            <md-table-head>Icon</md-table-head>
            <md-table-head>Alice&ID</md-table-head>
            <md-table-head>WorkingDir</md-table-head>
            <md-table-head>Action</md-table-head>
        </md-table-row>
        </md-table-header>

        <md-table-body v-for="workspace of projects", :key="workspace.short_name">
             <WorkspcaeItem :workspace='workspace'/>
        </md-table-body>
    </md-table>
</template>
<script>
import WorkspcaeItem from '@/components/widget/WorkspcaeItem.vue'

export default {
  name: 'hello',
  data () {
    return {
      'active': [],
      'projects': []
    }
  },
  components: {
    WorkspcaeItem
  },
  methods: {
    fetch_active_projects () {
      this.$http.get('projects').then(response => {
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
        for (let key in projects) {
          this.projects.push(projects[key])
        }
        return this.projects
      })
    }
  },
  created () {
    this.fetch_active_projects()
  }
}
</script>
