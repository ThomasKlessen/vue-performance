import Vue from 'vue'
import config from '../config'

export default {
  name: 'item',
  namespaced: false,
  state: {
    items: {},
    itemList: [],
    filterCount: config.filterCount
  },
  mutations: {
    addItems (state, items) {
      state.items = {}
      state.itemList = []
      items.forEach((item) => {
        if (state.itemList.indexOf(item.id) === -1) {
          state.itemList.push(item.id)
        }
        Vue.set(state.items, item.id, item)
      })
    },
    setFilterCount (state, count) {
      state.filterCount = count
    }
  },
  getters: {
    getItems: state => {
      let count = 0
      return state.itemList
        .map(itemId => state.items[itemId])
        .filter(item => count++ <= state.filterCount)
    }
  }
}
