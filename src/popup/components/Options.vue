<template>
  <div>
    <h4>About App</h4>
    <p>
      <strong>Version:&nbsp;</strong>
      {{ config.APP_VERSION }}
    </p>
    <h4>About Developer</h4>
    <p>
      <strong>Developer:&nbsp;</strong>
      <a :href="config.DEVELOPER_URL" target="_blank">{{ config.DEVELOPER_NAME }}</a>
    </p>
    <p>
      <strong>WebSite:&nbsp;</strong>
      <a href="https://www.yslibrary.net" target="_blank">CodingFeline</a>
    </p>
    <p>
      <font-awesome-icon icon="star"/>
      <a :href="config.CHROME_WEBSTORE_URL" target="_blank">&nbsp;Rate on Chrome Webstore</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { TabInfo } from "@/popup/store";
import * as ActionTypees from "../store/ActionTypes";
import Config from "../Config";

@Component({
  name: "options"
})
export default class Options extends Vue {
  @Getter("formattedSelectedTabs") formattedSelectedTabs!: String;

  config = Config;
}
</script>
