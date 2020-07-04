<template>
  <div>
    <b-form-textarea
      ref="textArea"
      :value="formattedSelectedTabs"
      readonly
      rows="20"
      max-rows="20"
    ></b-form-textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { BFormTextarea } from 'bootstrap-vue'

@Component({
  name: 'output-area',
})
export default class OutputArea extends Vue {
  @Getter('formattedSelectedTabs') formattedSelectedTabs!: string

  focus(): void {
    const textarea = this.$refs.textArea as BFormTextarea
    setTimeout(() => {
      textarea.focus()
      textarea.select()
    }, 10)
  }
}
</script>
