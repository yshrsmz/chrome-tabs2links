import { TabInfo, State, SelectedFormat } from ".";

export default {
    tabs(state: State):TabInfo[] {
        return state.tabs;
    },
    selectedFormat(state: State):SelectedFormat {
        return state.selectedFormat;
    }
}
