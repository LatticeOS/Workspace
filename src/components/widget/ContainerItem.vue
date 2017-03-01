<template>
    <md-table-row>
        <md-table-cell v-if="is_running">
            <md-icon>check_circle</md-icon>
            <md-tooltip md-direction="top">Runing</md-tooltip>
        </md-table-cell>
        <md-table-cell v-else>
            <md-icon>stop</md-icon>
            <md-tooltip md-direction="top">Stop</md-tooltip>
        </md-table-cell>
        <md-table-cell>
            <md-avatar>
                <img :src="container.icon"/>
            </md-avatar>
        </md-table-cell>
        <md-table-cell>
            <span>{{ container.name_without_project }}</span>
            <md-tooltip md-direction="top">{{ container.name }}</md-tooltip>
        </md-table-cell>
        <md-table-cell>
            <md-chips v-model="container.ports" md-static>
                <template scope="port">{{ port.value.HostPort }}/{{ port.key }}</template>
            </md-chips>
        </md-table-cell>
    </md-table-row>
</template>

<script>
export default {
  name: 'ContainerItem',
  props: ['container']
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
