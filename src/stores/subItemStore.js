import Vue from 'vue'

export default {
  name: 'subItem',
  namespaced: false,
  state: {
    subItems: {},
    subItemList: []
  },
  mutations: {
    setSubItems (state, subItems) {
      state.subItems = {}
      state.subItemList = []
      subItems.forEach(subItem => {
        if (state.subItemList.indexOf(subItem.id) === -1) {
          state.subItemList.push(subItem.id)
        }
        Vue.set(state.subItems, subItem.id, subItem)
      })
    },
    inc (state) {
      console.log('Increase all')
      state.subItemList.forEach(subItemId => state.subItems[subItemId].count++)
    },
    dec (state) {
      console.log('Decrease all')
      state.subItemList.forEach(subItemId => state.subItems[subItemId].count--)
    },
    incByItemId (state, itemId) {
      console.log('Increase for Id: ', itemId)
      state.subItemList
        .forEach(subItemId => {
          let subItem = state.subItems[subItemId]
          if (subItem.itemId === itemId) {
            subItem.count++
          }
        })
    },
    decByItemId (state, itemId) {
      console.log('Decrease for Id: ', itemId)
      state.subItemList
        .forEach(subItemId => {
          let subItem = state.subItems[subItemId]
          if (subItem.itemId === itemId) {
            subItem.count--
          }
        })
    }
  },
  getters: {
    getSubItemsByItemId: (state, getters) => itemId => {
      let count = 0
      const maxSubItems = getters.getMaxSubItems
      return state.subItemList
        .map(itemId => state.subItems[itemId])
        .filter(subItem => (subItem.itemId === itemId && ++count <= maxSubItems))
    },
    getSubItemById: state => subItemId => state.subItems[subItemId],
    getSumByItemId: state => itemId => 0, /* state.subItemList
      .reduce((sum, id) => {
        return state.subItems[id].itemId === itemId
          ? sum + state.subItems[id].count
          : sum
      }, 0), */
    getSum: state => 0
    /* state.subItemList
      .reduce((sum, id) => sum + state.subItems[id].count, 0) */
  }
}
