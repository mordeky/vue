<template>
  <ul>
    <li v-for="el in items" :key="el.id">
      <slot :item_zzz="el"/>
      <slot name="my-slot" :item2="el"/>
    </li>
  </ul>
</template>

<script setup>
// import {defineProps} from 'vue'

defineProps({
  items: Array
})

/*
export default {
  props: ['items', 'limit', 'offset'],
  computed: {
    currentWindow() {
      // console.log(this.offset)
      // console.log(this.limit)
      // const a = this.items.slice(this.offset, this.limit)
      // console.log(a)
      // return a
      return this.items
    }
  }
}
*/
</script>