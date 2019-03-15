import * as ActionTypes from './ActionTypes';
import * as MutationTypes from './MutationTypes';
import { TabInfo } from '.';


export default {
    [ActionTypes.FETCH_TABS]({ commit }) {
        chrome.tabs.query({}, (result) => {
            const tabs = result
                .filter(tab => !!(tab.id) && !!(tab.title) && !!(tab.url))
                .filter(tab => tab.url!!.startsWith("http"))
                .map((tab) => {
                    const tabInfo: TabInfo = {
                        id: `tab-${tab.id}`,
                        title: tab.title!!,
                        url: tab.url!!,
                    }
                    return tabInfo;
                });
            commit(MutationTypes.UPDATE_TABS, tabs);
        })
    }
};
