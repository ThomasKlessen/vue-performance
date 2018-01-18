export default {
  name: 'main',
  namespaced: false,
  state: {
    filterCount: 100,
    itemCount: 1000,
    dummyCount: 10000
  },
  mutations: {
    setFilterCount (state, value) {
      state.filterCount = value
    },
    setItemCount (state, value) {
      state.itemCount = value
    },
    setDummyCount (state, value) {
      state.dummyCount = value
    }
  },
  getters: {
    getFilterCount: state => state.filterCount,
    getItemCount: state => state.itemCount,
    getDummyCount: state => state.dummyCount
  }
}
