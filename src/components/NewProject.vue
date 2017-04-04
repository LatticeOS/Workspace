<template>
  <md-layout style="max-width: 800px;margin: 0 auto;" novalidate @submit.stop.prevent="submit">
    <md-input-container>
      <label>Project Name</label>
      <md-input v-model="name" placeholder="Project Name" required></md-input>
    </md-input-container>
    <md-input-container>
      <label>Logo</label>
      <md-input v-model="logo"></md-input>
    </md-input-container>
    <md-input-container>
      <label>Descript</label>
      <md-textarea v-model="desc" rows="5"></md-textarea>
    </md-input-container>
    <md-input-container>
      <label>YAML</label>
      <codemirror v-model="yml" :options="editorOptions" style="width:100%"></codemirror>
    </md-input-container>
    <md-button class="md-raised md-primary" @click.native="save()">Save</md-button>
    <md-snackbar md-position='top right' ref="snackbar" md-duration="4000">
      <span>Success</span>
      <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
    </md-snackbar>
  </md-layout>
</template>
<script>
export default {
  name: 'NewProject',
  data () {
    return {
      name: '',
      logo: '',
      desc: '',
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
    save () {
      this.$http.post(`create-project`, {
        'name': this.name,
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
  }
}
</script>
<style>
.CodeMirror{
  width: 100%;
}
</style>
