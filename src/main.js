// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import PerformanceTest from './PerformanceTest'
import router from './router'
import store from './stores'
import config from './config'

Vue.config.devtools = config.VueConfig.devtools
Vue.config.productionTip = config.VueConfig.productionTip
Vue.config.performance = config.VueConfig.performance

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { PerformanceTest },
  template: '<PerformanceTest/>'
})
