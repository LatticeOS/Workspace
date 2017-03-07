<template>
    <md-tabs class="md-transparent">
        <md-tab id="overview" md-label="Overview">
            <ContainerOverview/>
        </md-tab>

        <md-tab id="status" md-label="Status">
            <!-- # docker top containerId & docker stats containerId -->
            <p>Unopened interface</p>
        </md-tab>

        <md-tab id="terminal" md-label="Terminal">
            <!-- # docker exec containerId -->
            <p>Unopened interface</p>
        </md-tab>

        <md-tab id="fslogs" md-label="File System Changes">
            <!-- # docker diff containerId -->
            <p>Unopened interface</p>
        </md-tab>
    </md-tabs>
</template>
<script>
import ContainerOverview from '@/components/workspace/ContainerOverview'

export default {
  name: 'Container',
  components: {
    ContainerOverview
  }
}
</script>
