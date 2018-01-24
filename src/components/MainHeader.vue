<template>
  <div class="mainHeader">
    <div class="generateData">
      <div>
        <label>ItemCount:</label>
        <input v-model="itemCount"/>
      </div>
      <div>
        <label>SubItemCount:</label>
        <input v-model="subItemCount"/>
      </div>
      <div>
        <button v-on:click="generateData">Create Data</button>
      </div>
    </div>
    <div class="itemActions">
      <div>
        <label>Max Items:</label>
        <input v-model="maxItems"/>
      </div>
      <div>
        <label>Max SubItems:</label>
        <input v-model="maxSubItems"/>
      </div>
      <button v-on:click="setMax"> Set Maximum </button>
    </div>
    <div class="itemActions">
      <div>
        <label> Summe: {{ getSum }}</label>
        <button v-on:click="add"> + </button>
        <button v-on:click="sub"> - </button>
      </div>
    </div>
    <button class="fullsize" v-on:click="click">Clicked: {{ clicks }}</button>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return {
      maxItems: this.$store.getters.getMaxItems,
      maxSubItems: this.$store.getters.getMaxSubItems
    }
  },
  computed: {
    getSum () {
      return this.$store.getters.getSum
    },
    clicks () {
      return this.$store.getters.getClicks
    },
    itemCount: {
      get () { return this.$store.getters.getItemCount },
      set (value) { this.$store.commit('setItemCount', value) }
    },
    subItemCount: {
      get () { return this.$store.getters.getSubItemCount },
      set (value) { this.$store.commit('setSubItemCount', value) }
    }
  },
  methods: {
    setMax () {
      this.$store.commit('setMaxItems', parseInt(this.maxItems))
      this.$store.commit('setMaxSubItems', parseInt(this.maxSubItems))
    },
    add () {
      this.$store.commit('inc')
    },
    sub () {
      this.$store.commit('dec')
    },
    click () {
      console.log('Clicked')
      this.$store.commit('addClick')
    },
    generateData () {
      console.time('CreateData')
      const items = []
      const itemDetails = []
      const subItems = []
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
        for (let j = 0; j < this.subItemCount; j++) {
          subItems.push({
            id: i * parseInt(this.subItemCount) + j,
            itemId: i,
            name: i * parseInt(this.subItemCount) + j,
            count: 0
          })
        }
      }
      this.$store.commit('addItems', items)
      this.$store.commit('addItemDetails', itemDetails)
      this.$store.commit('setSubItems', subItems)
      console.timeEnd('CreateData')
    }
  }
}
</script>

<style>
  .mainHeader {
    height: 180px;
  }
  button {
    min-height: 30px;
  }
  .generateData,
  .itemActions {
    display: flex;
  }
  .generateData > div,
  .itemActions > div {
    padding: 10px;
  }
  .fullsize {
    width: 100%;
  }
</style>
