<template>
  <md-layout>
    <md-layout md-gutter>
        <md-layout md-column md-flex="30" md-flex-offset="20">
            <md-layout md-flex="20" style="display:block">
                <span class="md-headline">Start</span>
                <ul>
                    <li>New Application</li>
                    <li>New Service</li>
                    <li>New Workspace</li>
                </ul>
            </md-layout>
            <md-layout md-flex="30" style="display:block">
                <span class="md-headline">Help</span>
                <ul>
                    <li>Introduction</li>
                    <li>Document</li>
                    <li>Website</li>
                    <li>Github repository</li>
                </ul>
            </md-layout>
        </md-layout>
        <md-layout md-flex="30" style="display:block">
            <span class="md-headline">Quick links</span>
            <md-list>
                <md-list-item>
                    <router-link to='/'>
                        <div class="md-list-text-container">
                            <span>What`s docker?</span>
                            <p>The core of this project.</p>
                        </div>
                    </router-link>
                </md-list-item>
            </md-list>
        </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>
