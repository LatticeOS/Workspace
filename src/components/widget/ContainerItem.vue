<template>
    <md-table-row>
        <md-table-cell>
        <md-icon>check_circle</md-icon>
        <md-tooltip md-direction="top">Runing</md-tooltip>
        </md-table-cell>
        <md-table-cell>
        <md-avatar>
            <img :src="container.icon"/>
        </md-avatar>
        </md-table-cell>
        <md-table-cell>
        <span>{{ container.name }}</span>
        </md-table-cell>
        <md-table-cell>
        <span>{{ container.image }}</span>
        </md-table-cell>
    </md-table-row>
</template>

<script>
export default {
  name: 'ContainerItem',
  props: ['container']
}
</script>
