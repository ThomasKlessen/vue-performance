<template>
  <div class="item">
    <h3>{{ item.name }}</h3>
    <button v-on:click="add"> + </button>
    <button v-on:click="sub"> - </button>
    <span>Summe: {{ itemSum }}</span>
    <hr>
    <div class="subItemContainer">
      <sub-item
        v-for="subItem in subItems"
        :subItemId="subItem.id"
        :key="subItem.id"
      ></sub-item>
    </div>
  </div>
</template>

<script>
import SubItem from './SubItem'

export default {
  components: {SubItem},
  name: 'item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    subItems () {
      return this.$store.getters.getSubItemsByItemId(this.item.id)
    },
    itemSum () {
      return this.$store.getters.getSumByItemId(this.item.id)
    }
  },
  methods: {
    add () {
      this.$store.commit('incByItemId', this.item.id)
    },
    sub () {
      this.$store.commit('decByItemId', this.item.id)
    }
  },
  beforeUpdate () {
    // console.log('beforeUpdate')
    // console.time(this.item.id)
  },
  updated () {
    // console.timeEnd(this.item.id)
  }
}
</script>

<style>
  .item {
    border: 1px solid rgba(0,0,0,0.3);
    margin: 10px;
  }
  h3 {
    margin: 5px;
    margin-right: 30px;
    padding: 5px;
    display: inline-block;
  }
  .subItemContainer {
    display: flex;
    margin-bottom: 10px;
  }
</style>
