import Vue from 'vue'

export default {
  name: 'dummy',
  namespaced: false,
  state: {
    dummys: {},
    dummyList: [],
    clicks: 0
  },
  mutations: {
    addDummys (state, dummys) {
      state.dummys = {}
      state.dummyList = []
      dummys.forEach((dummy) => {
        if (state.dummyList.indexOf(dummy.id) === -1) {
          state.dummyList.push(dummy.id)
        }
        Vue.set(state.dummys, dummy.id, dummy)
      })
    },
    addClick (state) {
      state.clicks += 1
    }
  },
  getters: {
    getDummys: state => state.dummyList
      .map(itemId => state.dummys[itemId]),
    getClicks: state => state.clicks
  }
}
