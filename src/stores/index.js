import Vue from 'vue'
import Vuex from 'vuex'

import item from './itemStore'
import itemDetail from './itemDetailStore'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    item,
    itemDetail
  }
})

console.time('StoreInitData')
const items = []
const itemDetails = []
for (let i = 0; i < 1000; i++) {
  items.push({
    id: i,
    name: 'Item ' + i
  })
  itemDetails.push({
    id: i,
    itemId: i,
    label: 'ItemDetail ' + i
  })
}

store.commit('addItems', items)
store.commit('addItemDetails', itemDetails)
console.timeEnd('StoreInitData')
export default store
