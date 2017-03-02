<template>
    <md-table>
        <md-table-header>
        <md-table-row>
            <md-table-head>Statue</md-table-head>
            <md-table-head>Icon</md-table-head>
            <md-table-head>Alice&ID</md-table-head>
            <md-table-head>Network</md-table-head>
        </md-table-row>
        </md-table-header>

        <md-table-body v-for="(container, key) in containers", :key="key">
            <ContainerItem :container="container"/>
        </md-table-body>
    </md-table>
</template>

<script>
import ContainerItem from '@/components/widget/ContainerItem.vue'

export default {
  name: 'Containers',
  components: {
    ContainerItem
  },
  data () {
    return {
      'containers': []
    }
  },
  methods: {
    fetch_project_containers () {
      this.$http.get(`projects/${this.$route.params.workspace}`)
      .then(response => {
        this.containers = response.body.containers
      })
    }
  },
  created () {
    this.fetch_project_containers()
  }
}
</script>
