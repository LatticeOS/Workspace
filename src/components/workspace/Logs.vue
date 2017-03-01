<template>
  <md-layout>
    <p v-for="(vlogs,tag) in logs" :key="tag">
      <span>{{ tag }}</span>
      <span v-for="tlogs in vlogs" :key="tlogs">{{ tlogs }}</span>
    </p>
  </md-layout>
</template>
<script>
export default {
  name: 'Workspace',
  components: {
  },
  data () {
    return {
      logs: {}
    }
  },
  methods: {
    fetch_project_logs () {
      this.$http.get(`/logs/${this.$route.params.workspace}/100`).then(response => {
        this.logs = response.body.logs
      })
    }
  },
  created () {
    this.fetch_project_logs()
  }
}
</script>
