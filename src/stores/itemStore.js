import Vue from 'vue'

export default {
  name: 'item',
  namespaced: false,
  state: {
    items: {},
    itemList: [],
    showCounter: false
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
    toggleShowCounter (state) {
      state.showCounter = !state.showCounter
    }
  },
  getters: {
    getItems: (state, getters) => {
      let count = 0
      let filterCount = getters.getFilterCount
      return state.itemList
        .map(itemId => state.items[itemId])
        .filter(item => count++ <= filterCount)
    },
    getShowCounter: state => state.showCounter
  }
}
