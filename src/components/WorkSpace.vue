<template>
  <md-layout style="display: block;">
    <md-layout md-gutter style="width:100%">
      <md-card style="width:100%">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ $route.params.workspace }}</div>
            <div class="md-subhead">{{ $route.params.summer }}</div>
          </md-card-header-text>

          <md-card-media>
            <object :data='`${$http.options.root}/projects/logo/${$route.params.workspace}`' type="image/png">
              <img src="/static/logo.png" />
            </object>
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary" @click.native="startWorkspace()">Start</md-button>
          <md-button class="md-raised md-accent" @click.native="closeWorkspace()">Stop</md-button>
        </md-card-actions>
      </md-card>
    </md-layout>
    <md-progress md-indeterminate v-if="loding"></md-progress>
    <md-layout md-gutter style="margin-top: 2em;">
      <md-layout md-flex-xsmall="100" md-flex-small="33" md-flex-medium="25" md-flex-large="25" md-flex-xlarge="20">
        <md-list>
          <md-list-item class="md-inset" v-for="(link, key) in navs" :key="key">
            <router-link :to="link.href"> {{ link.name }} </router-link>
          </md-list-item>
        </md-list>
      </md-layout>

      <md-layout md-flex-xsmall="100" md-flex-small="67" md-flex-medium="75" md-flex-large="75" md-flex-xlarge="80">
        <md-card style="width:100%">
          <md-card-content>
            <router-view></router-view>
          </md-card-content>
        </md-card>
      </md-layout>
    </md-layout>
    
    <md-snackbar md-position='top right' ref="snackbar" md-duration="4000">
      <span>Success</span>
      <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
    </md-snackbar>
  </md-layout>
</template>

<script>
export default {
  name: 'Workspace',
  components: {
  },
  data () {
    return {
      loding: false,
      navs: [
        {
          'name': 'Readme',
          'href': 'readme'
        },
        {
          'name': 'Containers',
          'href': 'containers'
        },
        {
          'name': 'YAML',
          'href': 'yaml'
        },
        {
          'name': 'Logs',
          'href': 'logs'
        },
        {
          'name': 'Options',
          'href': 'options'
        }
      ],
      readme: ''
    }
  },
  methods: {
    startWorkspace () {
      // start --data '{"id":"hello-node"}' -H'Content-type: application/json'
      this.loding = true
      this.$http.post(`projects`, {'id': this.$route.params.workspace})
      .then(response => {
        if (response.ok) this.$refs.snackbar.open()
        this.loding = false
      })
    },
    closeWorkspace () {
      this.loding = true
      this.$http.post(`down`, {'id': this.$route.params.workspace})
      .then(response => {
        if (response.ok) this.$refs.snackbar.open()
        this.loding = false
      })
    }
  }
}
</script>
