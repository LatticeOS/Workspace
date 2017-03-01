<template>
  <md-layout>
    {{ readme }}
  </md-layout>
</template>
<script>
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
        this.readme = response.body.readme
      })
    }
  },
  created () {
    this.fetch_project_readme()
  }
}
</script>
