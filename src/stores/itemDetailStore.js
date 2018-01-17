import Vue from 'vue'

export default {
  name: 'itemDetails',
  namespaced: false,
  state: {
    itemDetails: {},
    itemDetailList: []
  },
  mutations: {
    addItemDetails (state, itemDetails) {
      state.itemDetails = {}
      state.itemDetailList = []
      itemDetails.forEach((itemDetail) => {
        if (state.itemDetailList.indexOf(itemDetail.id) === -1) {
          state.itemDetailList.push(itemDetail.id)
        }
        Vue.set(state.itemDetails, itemDetail.id, itemDetail)
      })
    },
    addOne (state) {
      state.itemDetailList.forEach(itemId => {
        state.itemDetails[itemId].count++
      })
    }
  },
  getters: {
    allItemDetails: state => state.itemDetailList
      .map(itemDetailId => state.itemDetails[itemDetailId]),
    itemDetailsbyItemId: state => itemId => state.itemDetailList
      .map(itemDetailId => state.itemDetails[itemDetailId])
      .find(itemDetail => itemDetail.itemId === itemId)
  }
}
