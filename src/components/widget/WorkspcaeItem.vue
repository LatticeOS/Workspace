<template>
    <md-table-row>
        <md-table-cell v-if="workspace.active">
            <md-icon>check_circle</md-icon>
            <md-tooltip md-direction="top">Runing</md-tooltip>
        </md-table-cell>
        <md-table-cell v-else>
            <md-icon>stop</md-icon>
            <md-tooltip md-direction="top">Stopped</md-tooltip>
        </md-table-cell>
        <md-table-cell>
            <md-avatar>
                <img :src='`${$http.options.root}/projects/logo/${workspace.key}`'>
            </md-avatar>
        </md-table-cell>
        <md-table-cell>
            <router-link :to='`/${workspace.key}/readme`'> {{ workspace.short_name }} </router-link>
            <md-tooltip md-direction="top">{{ workspace.key }}</md-tooltip>
        </md-table-cell>
        <md-table-cell>
            {{ workspace.working_dir }}
        </md-table-cell>
        <md-table-cell>
            
        </md-table-cell>
    </md-table-row>
</template>

<script>
export default {
  name: 'WorkspaceItem',
  props: ['workspace']
}

/*
command: "node /opt/hello.js",
is_running: true,
labels: {
    com.docker.compose.config-hash: "d4bddc596e9f93f55fd1774c6a04d88dbf18ac8918390553d856eb5a9c3891e7"
    com.docker.compose.container-number: "1"
    com.docker.compose.oneoff: "False"
    com.docker.compose.project: "hellonode"
    com.docker.compose.service: "hello"
    com.docker.compose.version: "1.11.2"
},
name: "hellonode_hello_1",
name_without_project: "hello_1",
ports: {
    1337/tcp: [
        {
            HostIp: '0.0.0.0',
            HostPort: "1337"
        }
    ]
},
state: "Up",
volumes: []
 */
</script>
