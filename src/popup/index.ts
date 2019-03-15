import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import store from './store';
import App from "./App";

import * as ActionTypes from './store/ActionTypes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

let v = new Vue({
    el: '#app',
    store: store,
    created() {
        const dispatch = this.$store.dispatch;
        dispatch(ActionTypes.FETCH_TABS)
    },
    render: h => h(App)
});
