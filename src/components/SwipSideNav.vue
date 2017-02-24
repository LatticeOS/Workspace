<template>
    <md-sidenav class="md-left">
        <md-list>
            <md-toolbar vue-material-logo md-theme-white>
                <span>Workspaces</span>
            </md-toolbar>
            <md-list-item href="#">
                <md-avatar>
                    <img src="https://cn.vuejs.org/images/logo.png"/>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Vue2.x</span>
                    <p>vscode + webpack + vue2.x</p>
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
  name: 'hello'
}
</script>
