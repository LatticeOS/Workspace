<template>
    <md-tabs>
        <md-tab id="overview" md-label="Overview">
            <ContainerOverview/>
        </md-tab>

        <md-tab id="status" md-label="Status">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>

        <md-tab id="terminal" md-label="Terminal">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
        </md-tab>

        <md-tab id="fslogs" md-label="File System Changes">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
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
