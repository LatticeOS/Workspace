<template>
  <md-layout>
    <codemirror v-model="yml" :options="editorOptions"></codemirror>
    <md-button class="md-raised md-primary" @click.native="update()">Update</md-button>
    <md-snackbar md-position='top right' ref="snackbar" md-duration="4000">
      <span v-model="msg">Success</span>
      <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
    </md-snackbar>
  </md-layout>
</template>

<script>
// Similarly, you can also introduce the resource pack you want to use within the component
// require('codemirror/some-resource')
export default {
  data () {
    return {
      config: [],
      yml: '',
      msg: 'Success!',
      editorOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/x-yaml',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        extraKeys: { 'Ctrl': 'autocomplete' },
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
      }
    }
  },
  methods: {
    fetch_project_yaml () {
      this.$http.get(`projects/yml/${this.$route.params.workspace}`).then(response => {
        this.config = response.body.config
        this.yml = response.body.yml
      })
    },
    save () {
      this.$http.put(`update-project`, {
        'name': this.$route.params.workspace,
        'yml': this.yml
      }).then(response => {
        if (response.ok) this.msg = 'Success!'
        else this.msg = response.body
        this.$refs.snackbar.open()
      }, response => {
        this.msg = response.body
        this.$refs.snackbar.open()
      })
    }
  },
  created () {
    this.fetch_project_yaml()
  }
}
</script>

