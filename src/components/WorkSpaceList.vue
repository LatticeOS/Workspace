<template>
  <md-layout style="max-width: 800px;margin: 0 auto;">
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
    <md-speed-dial md-open="hover" md-direction="top" class="md-fab-bottom-right" md-theme="light-blue">
      <md-button class="md-fab" md-fab-trigger>
        <md-icon md-icon-morph>add</md-icon>
        <router-link to='/newProject'>
          <md-icon>add</md-icon>
        </router-link>
      </md-button>

      <md-button class="md-fab md-primary md-mini md-clean">
        <md-icon>cloud_download</md-icon>
      </md-button>
    </md-speed-dial>
  </md-layout>
</template>
<script>
import WorkspcaeItem from '@/components/widget/WorkspcaeItem.vue'

export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components: {
    WorkspcaeItem
  },
  computed: {
    projects () {
      return this.$store.getters.projects
    }
  },
  created () {
    this.$store.dispatch('REFRESH_PROJECT_LIST')
  }
}
</script>
