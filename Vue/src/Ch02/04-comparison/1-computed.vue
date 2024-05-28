<!-- See Also: Example 4.01 -->

<template>
  <div>
    <p id="not-optimal">{{ authors[0].bio.name }}</p>
    <p id="optimal">{{ authorName }}</p>
  </div>
</template>

<script setup>
import {computed} from "vue";

const authors = [{bio: {name: 'John', title: 'Dr.',}}]

const authorName = computed( ()=>{
  return authors ? authors[0].bio.name : 'No Name'
})

</script>