<template>
  <div id="app" class="md-sidenav main-sidebar md-left md-fixed md-theme-default">
    <md-toolbar class="md-transparent">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>

    <router-view></router-view>

    <md-sidenav ref="leftSidenav">
      <SwipSideNav/>
    </md-sidenav>
  </div>
</template>

<script>
import SwipSideNav from '@/components/SwipSideNav'
export default {
  name: 'app',
  components: {
    SwipSideNav
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  },
  created () {
    this.$store.dispatch('REFRESH_HOST')
  }
}
</script>
