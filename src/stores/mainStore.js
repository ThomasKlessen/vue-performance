export default {
  name: 'main',
  namespaced: false,
  state: {
    filterCount: 100,
    itemCount: 1000,
    dummyCount: 10000,
    showFader: false
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
    },
    setShowFader (state, value) {
      console.log('Set show fader')
      state.showFader = value
    }
  },
  getters: {
    getFilterCount: state => state.filterCount,
    getItemCount: state => state.itemCount,
    getDummyCount: state => state.dummyCount,
    getShowFader: state => state.showFader
  }
}
