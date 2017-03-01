<template>
  <codemirror v-model="yml" :options="editorOptions"></codemirror>
</template>

<script>
// Similarly, you can also introduce the resource pack you want to use within the component
// require('codemirror/some-resource')
export default {
  data () {
    return {
      config: [],
      yml: '',
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
    }
  },
  created () {
    this.fetch_project_yaml()
  }
}
</script>

