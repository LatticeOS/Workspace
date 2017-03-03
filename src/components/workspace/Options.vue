<template>
    <md-layout>
        <p>Once you delete a Workspace, there is no going back. Please be certain.</p>
        <md-dialog-confirm
            :md-title="confirm.title"
            :md-content-html="confirm.contentHtml"
            :md-ok-text="confirm.ok"
            :md-cancel-text="confirm.cancel"
            @open="onOpen"
            @close="onClose"
            ref="dialog5">
        </md-dialog-confirm>
        <md-button class="md-raised md-accent" @click.native="openDialog('dialog5')">Delete</md-button>
    </md-layout>
</template>

<script>

export default {
  name: 'options',
  components: {
  },
  data: () => ({
    confirm: {
      title: 'Are you ABSOLUTELY sure?',
      contentHtml: `
Unexpected bad things will happen if you don’t read this! <br>

This action <strong>CANNOT</strong> be undone. This will permanently delete the workspace, and remove all temp data.`,
      ok: 'I understand the consequences, delete this workspace',
      cancel: 'Stop it'
    }
  }),
  methods: {
    delete_project () {
      this.$http.delete(`remove-project/${this.$route.params.workspace}/100`)
      .then(response => {})
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
      if (type === 'ok') {
        this.delete_project()
      }
    }
  },
  created () {
    this.fetch_project_logs()
  }
}
</script>
