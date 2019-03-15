<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="tab in tabs" :key="tab.id">
        <b-form-checkbox :id="tab.id" @change="(checked) => onItemChecked(tab.id, checked)">{{ tab.title }}</b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { TabInfo } from "@/popup/store";

@Component({
  name: "app"
})
export default class App extends Vue {
  @Getter("tabs") tabs!: TabInfo[];

  onItemChecked(tabId: String, checked: Boolean) {
    console.log("checked", tabId, checked);
  }
}
</script>
