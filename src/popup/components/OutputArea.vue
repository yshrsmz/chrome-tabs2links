<template>
  <div>
    <b-form-textarea :value="formattedSelectedTabs" readonly rows="20" max-rows="20" ref="textArea"></b-form-textarea>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { TabInfo } from "@/popup/store";
import * as ActionTypees from "../store/ActionTypes";

@Component({
  name: "output-area"
})
export default class OutputArea extends Vue {
  @Getter("formattedSelectedTabs") formattedSelectedTabs!: String;

  focus() {
    const textarea = this.$refs.textArea as any;
    setTimeout(() => {
      textarea.focus();
      textarea.select();
    }, 10);
  }
}
</script>
