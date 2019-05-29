// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'reset-css'
import loading from '@/common/loading'
import navBar from '@/components/NavBar'
import store from '@/store'
import { Indicator, Toast } from 'mint-ui'

Vue.config.productionTip = false
// Vue.component('loading', loading)
Vue.component('loading', Indicator)
Vue.component('toast', Toast)
Vue.component('navBar', navBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
