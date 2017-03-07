<template>
    <md-table>
        <md-table-body v-for="(info, key) in container", :key="key">
            <md-table-cell>
                {{ key }}
            </md-table-cell>
            <md-table-cell v-html='echo_format(info)'>
            </md-table-cell>
        </md-table-body>
    </md-table>
</template>
<script>
export default {
  name: 'ContainerOverview',
  components: {
  },
  data () {
    return {
      container: {}
    }
  },
  methods: {
    fetch_project_container_overview () {
      this.$http.get(`projects/${this.$route.params.workspace}/${this.$route.params.container}`)
      .then(response => {
        this.container = response.body
      })
    },
    echo_format (data) {
      if (typeof data === 'string') return data
      let list = '<lu>'
      for (let key in data) {
        list += `<li>${key} = ${this.echo_format(data[key])}</li>`
      }
      return list + '</lu>'
    }
  },
  created () {
    this.fetch_project_container_overview()
  }
}

/*
{
  "environment": {
    "NODE_VERSION": "7.8.0",
    "NPM_CONFIG_LOGLEVEL": "info",
    "PATH": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "YARN_VERSION": "0.21.3"
  },
  "human_readable_command": "node /opt/hello.js",
  "id": "ad81edf9e3a3af490ca0cf43a0ff1974958f11a4c9d54f4867d2fb5b6b44db19",
  "image": "sha256:4c5254beebdd9e4e2366491b4b1749948c09dc02aecdf4bd963840a19cb296b4",
  "ip": "",
  "labels": {
    "com.docker.compose.config-hash": "d4bddc596e9f93f55fd1774c6a04d88dbf18ac8918390553d856eb5a9c3891e7",
    "com.docker.compose.container-number": "1",
    "com.docker.compose.oneoff": "False",
    "com.docker.compose.project": "hellonode",
    "com.docker.compose.service": "hello",
    "com.docker.compose.version": "1.11.2"
  },
  "log_config": {
    "Config": {},
    "Type": "json-file"
  },
  "name": "hellonode_hello_1",
  "name_without_project": "hello_1",
  "number": 1,
  "ports": {
    "1337/tcp": [
      {
        "HostIp": "0.0.0.0",
        "HostPort": "1337"
      }
    ]
  },
  "repo_tags": [
    "hellonode_hello:latest"
  ],
  "short_id": "ad81edf9e3a3",
  "started_at": "2017-03-31T04:26:21.77148087Z"
}
*/
</script>
