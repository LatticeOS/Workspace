<template>
    <md-sidenav class="md-left">
        <md-list>
            <md-list-item v-for="key in active" :href="key" :key="key">
                <md-avatar>
                    <img src="https://cn.vuejs.org/images/logo.png"/>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>{{ projects[key]['key'] }}</span>
                    <p>{{ projects[key]['project'] }}</p>
                </div>
            </md-list-item>
            <md-list-item href="#">
                <md-avatar class="md-avatar-icon">
                    <md-icon>library_add</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>New Workspace</span>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                    <md-tooltip md-direction="right">Pull & build new containers</md-tooltip>
                </md-button>
            </md-list-item>
        </md-list>
    </md-sidenav>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      'active': [],
      'projects': {}
    }
  },
  methods: {
    fetch_active_projects () {
      this.$http.get('projects').then(response => {
        let body = response.body
        for (let key in body['projects']) {
          if (body['projects'].hasOwnProperty(key)) {
            this.projects[key.toLowerCase().replace(/[^a-z0-9]/g, '')] = {
              'key': key,
              'project': body['projects'][key]
            }
          }
        }
        this.projects = body
        this.active = body['active']
        console.log(this.projects)
        return this.projects
      })
    }
  },
  created () {
    this.fetch_active_projects()
  }
}
</script>
