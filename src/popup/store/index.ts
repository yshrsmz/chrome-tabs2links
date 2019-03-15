import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export enum SelectedFormat {
    HTML, MARKDOWN
}

export interface TabInfo {
    id: String,
    title: String,
    url: String,
}

export interface State {
    tabs: TabInfo[],
    selectedFormat: SelectedFormat,
}

const state: State = {
    tabs: [],
    selectedFormat: SelectedFormat.MARKDOWN,
};

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
});

export default store;
