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
    id: String
    index: Number
    title: String
    url: String
}

export interface State {
    tabs: Map<String, TabInfo>
    selectedTabIds: String[]
    selectedFormat: SelectedFormat
}

const state: State = {
    tabs: new Map<String, TabInfo>(),
    selectedTabIds:[],
    selectedFormat: SelectedFormat.MARKDOWN,
};

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
});

export default store;
