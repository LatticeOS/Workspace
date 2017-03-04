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
            <img src="https://cn.vuejs.org/images/logo.png">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary">Start</md-button>
          <md-button class="md-raised md-accent">Stop</md-button>
        </md-card-actions>
      </md-card>
    </md-layout>

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
  </md-layout>
</template>

<script>
export default {
  name: 'Workspace',
  components: {
  },
  data () {
    return {
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
  }
}
</script>
