<template>
    <md-sidenav class="md-left">
        <md-list>
            <md-list-item v-for="key in active" :key="key">
                <router-link :to='`/${projects[key]["key"]}/readme`'>
                    <md-avatar>
                        <img :src='`${$http.options.root}/projects/logo/${projects[key]["key"]}`'>
                    </md-avatar>

                    <div class="md-list-text-container">
                        <span>{{ key }}</span>
                        <p>{{ projects[key]['project'] }}</p>
                    </div>
                </router-link>
            </md-list-item>
            <md-list-item>
                <router-link :to='`/new`'>
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
                </router-link>
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
        this.active = body['active'].filter(item => typeof item === 'string')
        return this.projects
      })
    }
  },
  created () {
    this.fetch_active_projects()
  }
}
</script>
