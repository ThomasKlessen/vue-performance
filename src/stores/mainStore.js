export default {
  name: 'main',
  namespaced: false,
  state: {
    maxItems: 20,
    maxSubItems: 20,
    itemCount: 100,
    subItemCount: 50,
    clicks: 0
  },
  mutations: {
    setItemCount (state, value) {
      state.itemCount = value
    },
    setSubItemCount (state, value) {
      state.subItemCount = value
    },
    setMaxItems (state, value) {
      state.maxItems = value
    },
    setMaxSubItems (state, value) {
      state.maxSubItems = value
    },
    addClick (state) {
      state.clicks++
    }
  },
  getters: {
    getItemCount: state => state.itemCount,
    getSubItemCount: state => state.subItemCount,
    getMaxItems: state => state.maxItems,
    getMaxSubItems: state => state.maxSubItems,
    getClicks: state => state.clicks
  }
}
