<template>
  <md-layout style="display: block;" v-html='readme'>
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
