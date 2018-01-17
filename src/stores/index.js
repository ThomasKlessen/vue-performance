import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'

import item from './itemStore'
import itemDetail from './itemDetailStore'
import dummy from './dummyStore'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    item,
    itemDetail,
    dummy
  }
})

console.time('StoreInitData')
const items = []
const itemDetails = []
for (let i = 0; i < config.itemCount; i++) {
  items.push({
    id: i,
    name: 'Item ' + i
  })
  itemDetails.push({
    id: i,
    itemId: i,
    label: 'ItemDetail ' + i,
    count: 0
  })
}

const dummyItems = []
for (let i = 0; i < config.dummyCount; i++) {
  dummyItems.push({
    id: i,
    label: 'Dummy ' + i
  })
}

store.commit('addItems', items)
store.commit('addItemDetails', itemDetails)
store.commit('addDummys', dummyItems)
console.timeEnd('StoreInitData')
export default store
