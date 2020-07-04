import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAlignLeft,
  faListUl,
  faCog,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import store from './store'
import App from './App.vue'

import * as ActionTypes from './store/ActionTypes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faListUl, faAlignLeft, faCog, faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  store: store,
  created() {
    const dispatch = this.$store.dispatch
    dispatch(ActionTypes.LOAD_INITIAL_DATA)
  },
  render: (h) => h(App),
})
