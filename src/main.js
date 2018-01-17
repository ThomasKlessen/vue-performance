// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import PerformanceTest from './PerformanceTest'
import router from './router'
import store from './stores'

Vue.config.productionTip = false
console.time('All')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    console.timeEnd('All')
  },
  components: { PerformanceTest },
  template: '<PerformanceTest/>'
})
