<template>
    <md-table v-once>
        <md-table-header>
        <md-table-row>
            <md-table-head>Statue</md-table-head>
            <md-table-head>Icon</md-table-head>
            <md-table-head>Alice&ID</md-table-head>
            <md-table-head>Image</md-table-head>
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
      containers: [
        {
          'name': 'VSCode',
          'icon': 'https://code.visualstudio.com/images/favicon.ico',
          'image': 'los/vscode+vue2'
        },
        {
          'name': 'Vue2.x',
          'icon': 'https://cn.vuejs.org/images/logo.png',
          'image': 'los/vue2'
        },
        {
          'name': 'Data volume',
          'icon': 'https://www.docker.com/sites/default/files/whale_0.png',
          'image': 'volume'
        }
      ]
    }
  }
}
</script>
