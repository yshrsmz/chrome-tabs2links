/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as ActionTypes from './ActionTypes'
import * as MutationTypes from './MutationTypes'
import { TabInfo, SelectedFormat, State } from '.'
import { ActionTree } from 'vuex'

export default {
  async [ActionTypes.LOAD_INITIAL_DATA]({ dispatch }): Promise<void> {
    await dispatch(ActionTypes.FETCH_TABS)
    dispatch(ActionTypes.SELECT_ALL_TABS)
  },
  [ActionTypes.FETCH_TABS]({ commit }): Promise<void> {
    return new Promise((resolve, _reject) => {
      chrome.tabs.query({ currentWindow: true }, (result) => {
        const tabs = result
          .filter((tab) => !!tab.id && !!tab.title && !!tab.url)
          // filter out `chrome:` and other non-http scheme
          .filter((tab) => tab.url!.startsWith('http'))
          .map((tab) => {
            const tabInfo: TabInfo = {
              id: `tab-${tab.id}`,
              index: tab.index!,
              title: tab.title!,
              url: tab.url!,
            }
            return tabInfo
          })
          // transform to Map<TabId, TabInfo>
          .reduce((accumulator, tab) => {
            accumulator.set(tab.id, tab)
            return accumulator
          }, new Map<string, TabInfo>())
        commit(MutationTypes.UPDATE_TABS, tabs)
        resolve()
      })
    })
  },
  [ActionTypes.UPDATE_SELECTED_FORMAT]({ commit }, newFormat: SelectedFormat) {
    commit(MutationTypes.UPDATE_SELECTED_FORMAT, newFormat)
  },
  [ActionTypes.SELECT_TAB]({ commit, state }, targetTabId: string) {
    const currentlySelected: string[] = state.selectedTabIds
    if (currentlySelected.indexOf(targetTabId) < 0) {
      const result = currentlySelected
        .concat([targetTabId])
        .sort((id1, id2) => {
          const tab1 = state.tabs.get(id1)!
          const tab2 = state.tabs.get(id2)!
          return tab1.index - tab2.index
        })
      commit(MutationTypes.UPDATE_SELECTED_TABS, result)
    }
  },
  [ActionTypes.DESELECT_TAB]({ commit, state }, targetTabId: string) {
    const currentlySelected: string[] = state.selectedTabIds
    const index = currentlySelected.indexOf(targetTabId)
    if (index > -1) {
      commit(
        MutationTypes.UPDATE_SELECTED_TABS,
        currentlySelected.filter((id) => id != targetTabId)
      )
    }
  },
  [ActionTypes.SELECT_ALL_TABS]({ commit, state }) {
    commit(MutationTypes.UPDATE_SELECTED_TABS, Array.from(state.tabs.keys()))
  },
  [ActionTypes.DESELECT_ALL_TABS]({ commit }) {
    commit(MutationTypes.UPDATE_SELECTED_TABS, [])
  },
} as ActionTree<State, State>
