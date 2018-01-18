<template>
  <div>
    <div class="generateData">
      <div>
        <label>ItemCount:</label>
        <input v-model="itemCount"/>
      </div>
      <div>
        <label>DummyCount:</label>
        <input v-model="dummyCount"/>
      </div>
      <div>
        <button v-on:click="generateData">Create Data</button>
      </div>
    </div>
    <div class="itemActions">
      <div>
        <label>FilterCount:</label>
        <input v-model="filterCount"/>
      </div>
      <div>
        <button v-on:click="addOne"> Add 1 to all </button>
        <button v-on:click="toggleShowCounter"> Toolge all counter </button>
      </div>
      <div>
        <label>{{ calcItems }}</label>
      </div>
    </div>
    <button class="fullsize" v-on:click="click">Clicked: {{ clicks }}</button>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  computed: {
    calcItems () {
      return this.$store.getters.getCalcItems
    },
    clicks () {
      return this.$store.getters.getClicks
    },
    filterCount: {
      get () { return this.$store.getters.getFilterCount },
      set (value) { this.$store.commit('setFilterCount', value) }
    },
    itemCount: {
      get () { return this.$store.getters.getItemCount },
      set (value) { this.$store.commit('setItemCount', value) }
    },
    dummyCount: {
      get () { return this.$store.getters.getDummyCount },
      set (value) { this.$store.commit('setDummyCount', value) }
    }
  },
  methods: {
    addOne () {
      console.log('Click')
      this.$store.commit('addOne')
    },
    toggleShowCounter () {
      console.log('toggleShowCounter')
      this.$store.commit('toggleShowCounter')
    },
    click () {
      console.log('Clicked')
      this.$store.commit('addClick')
    },
    generateData () {
      console.log(this.filterCount)
      console.time('CreateData')
      const items = []
      const itemDetails = []
      for (let i = 0; i < this.itemCount; i++) {
        items.push({
          id: i,
          name: 'Item ' + i
        })
        itemDetails.push({
          id: i,
          itemId: i,
          label: 'ItemDetail ' + i,
          count: 0,
          test: 1
        })
      }

      const dummyItems = []
      for (let i = 0; i < this.dummyCount; i++) {
        dummyItems.push({
          id: i,
          label: 'Dummy ' + i
        })
      }

      this.$store.commit('addItems', items)
      this.$store.commit('addItemDetails', itemDetails)
      this.$store.commit('addDummys', dummyItems)
      console.timeEnd('CreateData')
    }
  }
}
</script>

<style>
  button {
    min-height: 30px;
  }
  .generateData,
  .itemActions {
    display: flex;
  }
  .generateData > div,
  .itemActions > div {
    padding: 20px;
  }
  .fullsize {
    width: 100%;
  }
</style>
