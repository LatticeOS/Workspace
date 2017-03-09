<template>
    <md-sidenav class="md-left">
        <md-list>
            <md-list-item>
                <router-link to='/'>
                    <md-avatar class="md-avatar-icon">
                        <md-icon>home</md-icon>
                    </md-avatar>

                    <div class="md-list-text-container">
                        <span>Welcome</span>
                    </div>
                </router-link>
            </md-list-item>
            <md-list-item v-for="workspace of projects" :key="workspace.short_name">
                <router-link :to='`/${workspace["key"]}/readme`'>
                    <md-avatar>
                        <img :src='`${$http.options.root}/projects/logo/${workspace["key"]}`'>
                    </md-avatar>

                    <div class="md-list-text-container">
                        <span>{{ workspace.short_name }}</span>
                        <p>{{ workspace['project'] }}</p>
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
    }
  },
  computed: {
    projects () {
      return this.$store.getters.projects_active
    }
  },
  created () {
    this.$store.dispatch('REFRESH_PROJECT_LIST')
  }
}
</script>
