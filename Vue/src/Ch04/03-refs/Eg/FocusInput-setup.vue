<template>
  <div id="app">
    <input ref="theInput"/>
    <button @click="focus()">Focus Input</button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const theInput = ref(null)
function focus() {
  theInput.value.focus()
}
</script>