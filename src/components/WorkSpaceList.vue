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
