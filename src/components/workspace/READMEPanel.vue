<template>
  <md-layout style="display: block;">
    <template v-for="(value, key) in test">
      <div class="md-chip md-theme-default" v-for="ivalue in value">
        {{ ivalue.HostPort }}:{{ key }}
      </div>
    </template>
  </md-layout>
</template>
<script>
import marked from 'marked'

export default {
  name: 'Workspace',
  components: {
  },
  data () {
    return {
      readme: ''
    }
  },
  methods: {
    fetch_project_readme () {
      this.$http.get(`projects/readme/${this.$route.params.workspace}`).then(response => {
        this.readme = marked(response.body.readme)
      })
    }
  },
  created () {
    this.fetch_project_readme()
  }
}
</script>
