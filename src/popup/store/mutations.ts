import * as MutationTypes from './MutationTypes';
import { State, SelectedFormat, TabInfo } from '.';

export default {
    [MutationTypes.UPDATE_SELECTED_FORMAT](state: State, newFormat: SelectedFormat) {
        state.selectedFormat = newFormat;
    },
    [MutationTypes.UPDATE_SELECTED_TABS](state: State, newTabIds: String[]) {
        state.selectedTabIds = newTabIds;
    },
    [MutationTypes.UPDATE_TABS](state: State, newTabs: Map<String, TabInfo>) {
        state.tabs = newTabs;
    }
};
