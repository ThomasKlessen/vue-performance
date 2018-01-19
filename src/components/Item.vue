<template>
  <div class="item">
    <h3>{{ item.name }}</h3>
    <div v-show="showCounter">
      <span>Count: {{ detail.count }}</span>
      <button v-on:click="add"> + </button>
      <button v-on:click="sub"> - </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    detail () {
      return this.$store.getters.itemDetailsbyItemId(this.item.id)
    },
    showCounter () {
      return this.$store.getters.getShowCounter
    }
  },
  methods: {
    add () {
      this.detail.count++
    },
    sub () {
      this.detail.count--
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
    margin: 20px;
    padding: 10px;
  }
  h3 {
    margin: 10px;
    padding: 5px;
  }
</style>
