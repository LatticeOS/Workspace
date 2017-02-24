<template>
  <md-layout style="display: block;">
    <md-layout md-gutter style="width:100%">
      <md-card style="width:100%">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Vue2.x</div>
            <div class="md-subhead">vscode + webpack + vue2.x</div>
          </md-card-header-text>

          <md-card-media>
            <img src="https://cn.vuejs.org/images/logo.png">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary">Start</md-button>
          <md-button class="md-raised md-accent">Stop</md-button>
        </md-card-actions>
      </md-card>
    </md-layout>

    <md-layout md-gutter style="margin-top: 2em;">
      <md-layout md-flex-xsmall="100" md-flex-small="33" md-flex-medium="25" md-flex-large="25" md-flex-xlarge="20">
        <md-list>
          <md-list-item class="md-inset" href="#">Containers</md-list-item>
          <md-list-item class="md-inset" href="#">Config</md-list-item>
          <md-list-item class="md-inset" href="#">YAML</md-list-item>
          <md-list-item class="md-inset" href="#">Logs</md-list-item>
          <md-list-item class="md-inset" href="#">Setting</md-list-item>
        </md-list>
      </md-layout>

      <md-layout md-flex-xsmall="100" md-flex-small="67" md-flex-medium="75" md-flex-large="75" md-flex-xlarge="80">
        <md-card style="width:100%">
          <md-card-content>
            <md-table v-once>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Statue</md-table-head>
                  <md-table-head>Icon</md-table-head>
                  <md-table-head>Alice&ID</md-table-head>
                  <md-table-head>Image</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row>
                  <md-table-cell>
                    <md-icon>check_circle</md-icon>
                    <md-tooltip md-direction="top">Runing</md-tooltip>
                  </md-table-cell>
                  <md-table-cell>
                    <md-avatar>
                      <img src="https://code.visualstudio.com/images/favicon.ico"/>
                    </md-avatar>
                  </md-table-cell>
                  <md-table-cell>
                    <span>VSCode</span>
                  </md-table-cell>
                  <md-table-cell>
                    <span>los/vscode+vue2</span>
                  </md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>
                    <md-icon>check_circle</md-icon>
                    <md-tooltip md-direction="top">Runing</md-tooltip>
                  </md-table-cell>
                  <md-table-cell>
                    <md-avatar>
                      <img src="https://cn.vuejs.org/images/logo.png"/>
                    </md-avatar>
                  </md-table-cell>
                  <md-table-cell>
                    <span>Vue2.x</span>
                  </md-table-cell>
                  <md-table-cell>
                    <span>los/vue2</span>
                  </md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>
                    <md-icon>check_circle</md-icon>
                    <md-tooltip md-direction="top">Runing</md-tooltip>
                  </md-table-cell>
                  <md-table-cell>
                    <md-avatar>
                      <img src="https://www.docker.com/sites/default/files/whale_0.png"/>
                    </md-avatar>
                  </md-table-cell>
                  <md-table-cell>
                    <span>Data volume</span>
                  </md-table-cell>
                  <md-table-cell>
                    <span>volume</span>
                  </md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </md-card-content>
        </md-card>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'hello'
}
</script>
