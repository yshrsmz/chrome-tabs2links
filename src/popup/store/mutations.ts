import * as MutationTypes from './MutationTypes'
import { State, SelectedFormat, TabInfo } from '.'

export default {
  [MutationTypes.UPDATE_SELECTED_FORMAT](
    state: State,
    newFormat: SelectedFormat
  ): void {
    state.selectedFormat = newFormat
  },
  [MutationTypes.UPDATE_SELECTED_TABS](
    state: State,
    newTabIds: string[]
  ): void {
    state.selectedTabIds = newTabIds
  },
  [MutationTypes.UPDATE_TABS](
    state: State,
    newTabs: Map<string, TabInfo>
  ): void {
    state.tabs = newTabs
  },
}
