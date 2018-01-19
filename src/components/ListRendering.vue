<template>
  <div class="listRendering">
    <main-header></main-header>
    <div>
      <ul>
        <item
          v-for="item in items"
          :item="item"
          :key="item.id"
        ></item>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from './Item'
import MainHeader from './MainHeader'

export default {
  components: {
    MainHeader,
    Item
  },
  name: 'ListRendering',
  computed: {
    items () {
      return this.$store.getters.getItems
    }
  },
  beforeCreate () {
    console.time('init_all')
  },
  mounted () {
    console.timeEnd('init_all')
  }
}
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
  .listRendering {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .listRendering > div {
    flex: 1;
  }
  .listRendering > div:nth-child(2) {
    flex: 0;
    height: calc(100% - 200px);
    overflow: auto;
  }
</style>
