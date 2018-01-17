import Vue from 'vue'
import Router from 'vue-router'
import ListRendering from '../components/ListRendering'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListRendering',
      component: ListRendering
    }
  ]
})
