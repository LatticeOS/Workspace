<template>
  <codemirror v-model="code" :options="editorOptions"></codemirror>
</template>

<script>
// Similarly, you can also introduce the resource pack you want to use within the component
// require('codemirror/some-resource')
export default {
  data () {
    return {
      code: '',
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
  mounted () {
    // console.log('this is current editor object', this.editor)
    // you can use this.editor to do something...
  }
}
</script>

