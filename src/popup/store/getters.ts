import { TabInfo, State, SelectedFormat } from '.'

const tabs = (state: State): TabInfo[] => {
  return Array.from(state.tabs.values())
}

const selectedTabIds = (state: State): string[] => {
  return state.selectedTabIds
}

const selectedTabs = (state: State): TabInfo[] => {
  return (
    state.selectedTabIds
      // filter non-existent tab ids
      .filter((id) => !!state.tabs.get(id))
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .map((id) => state.tabs.get(id)!)
  )
}

const isAllSelected = (state: State): boolean => {
  return state.tabs.size === state.selectedTabIds.length
}

const selectedFormat = (state: State): SelectedFormat => {
  return state.selectedFormat
}

const formattedSelectedTabs = (state: State): string => {
  return selectedTabs(state)
    .map((tab) => {
      return `- [${tab.title}](${tab.url})`
    })
    .reduce((accumulator, text) => {
      return `${accumulator}${text}\n`
    }, '')
}

export default {
  tabs,
  selectedTabIds,
  selectedTabs,
  isAllSelected,
  selectedFormat,
  formattedSelectedTabs,
}
