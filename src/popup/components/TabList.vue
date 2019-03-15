<template>
  <div>
    <b-form-checkbox @change="onToggleAllChanged">Select/Deselect All</b-form-checkbox>
    <b-list-group>
      <b-list-group-item v-for="tab in tabs" :key="tab.id" class="listItem">
        <b-form-checkbox
          :id="tab.id"
          :checked="isSelected(tab)"
          @change="(checked) => onItemChanged(tab.id, checked)"
        >{{ tab.title }}</b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { TabInfo } from "@/popup/store";
import * as ActionTypees from "../store/ActionTypes";

@Component({
  name: "tab-list"
})
export default class TabList extends Vue {
  @Getter("tabs") tabs!: TabInfo[];

  @Getter("selectedTabIds") selectedTabIds!:String[];

  @Action(ActionTypees.SELECT_TAB) selectTab;

  @Action(ActionTypees.DESELECT_TAB) deselectTab;

  @Action(ActionTypees.SELECT_ALL_TABS) selectAllTabs;

  @Action(ActionTypees.DESELECT_ALL_TABS) deselectAllTabs;

  isSelected(tab:TabInfo):Boolean {
      return this.selectedTabIds.indexOf(tab.id) > -1;
  }

  onItemChanged(tabId: String, checked: Boolean) {
    console.log("checked", tabId, checked);
    if (checked) {
      this.selectTab(tabId);
    } else {
      this.deselectTab(tabId);
    }
  }

  onToggleAllChanged(checked: Boolean) {
      if (checked) {
          this.selectAllTabs();
      } else {
          this.deselectAllTabs();
      }
  }
}
</script>

<style>
.listItem {
  word-break: break-word;
}
</style>
