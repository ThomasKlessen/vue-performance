import Vue from 'vue'
import Vuex from 'vuex'

import main from './mainStore'
import item from './itemStore'
import itemDetail from './itemDetailStore'
import subItem from './subItemStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    main,
    item,
    itemDetail,
    subItem
  }
})

export default store
