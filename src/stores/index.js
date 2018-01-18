import Vue from 'vue'
import Vuex from 'vuex'

import main from './mainStore'
import item from './itemStore'
import itemDetail from './itemDetailStore'
import dummy from './dummyStore'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    main,
    item,
    itemDetail,
    dummy
  }
})

export default store
