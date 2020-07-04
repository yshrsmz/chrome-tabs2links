import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export enum SelectedFormat {
  HTML,
  MARKDOWN,
}

export interface TabInfo {
  id: string
  index: number
  title: string
  url: string
}

export interface State {
  tabs: Map<string, TabInfo>
  selectedTabIds: string[]
  selectedFormat: SelectedFormat
}

const state: State = {
  tabs: new Map<string, TabInfo>(),
  selectedTabIds: [],
  selectedFormat: SelectedFormat.MARKDOWN,
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})

export default store
