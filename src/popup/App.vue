<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Tabs" active>
          <tab-list/>
        </b-tab>
        <b-tab title="Output" @click="onOutputTabSelected">
          <output-area ref="outputArea"/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { TabInfo } from "@/popup/store";
import * as ActionTypees from "./store/ActionTypes";

import TabList from "./components/TabList";
import OutputArea from "./components/OutputArea";

@Component({
  name: "app",
  components: {
    TabList,
    OutputArea
  }
})
export default class App extends Vue {

  onOutputTabSelected() {
    console.log("onOutputTabSelected");
    (this.$refs.outputArea as OutputArea).focus();
  }
}
</script>
