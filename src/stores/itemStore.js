import Vue from 'vue'

export default {
  name: 'item',
  namespaced: false,
  state: {
    items: {},
    itemList: []
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
    }
  },
  getters: {
    getItems: (state, getters) => {
      let count = 0
      const maxItems = getters.getMaxItems
      return state.itemList
        .map(itemId => state.items[itemId])
        .filter(item => ++count <= maxItems)
    }
  }
}
