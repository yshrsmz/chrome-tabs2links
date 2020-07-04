<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab active>
          <template slot="title">
            <font-awesome-icon icon="list-ul" />&nbsp;Tabs
          </template>
          <tab-list />
        </b-tab>
        <b-tab @click="onOutputTabSelected">
          <template slot="title">
            <font-awesome-icon icon="align-left" />&nbsp;Output
          </template>
          <output-area ref="outputArea" />
        </b-tab>
        <b-tab>
          <template slot="title">
            <font-awesome-icon icon="cog" />&nbsp;Options
          </template>
          <options />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import TabList from './components/TabList.vue'
import OutputArea from './components/OutputArea.vue'
import Options from './components/Options.vue'

@Component({
  name: 'app',
  components: {
    TabList,
    OutputArea,
    Options,
  },
})
export default class App extends Vue {
  onOutputTabSelected(): void {
    const outputArea = this.$refs.outputArea as OutputArea
    outputArea.focus()
  }
}
</script>
