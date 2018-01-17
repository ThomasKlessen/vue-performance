import Vue from 'vue'

export default {
  name: 'dummy',
  namespaced: false,
  state: {
    dummys: {},
    dummyList: []
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
    }
  },
  getters: {
    getDummys: state => state.dummyList
      .map(itemId => state.dummys[itemId])
  }
}
