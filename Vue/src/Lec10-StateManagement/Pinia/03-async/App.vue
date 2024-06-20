<script setup>
import {useDataStore} from './store.js';

const store = useDataStore();
store.fetchData();

function fetchData() {
  store.fetchData();
}
</script>

<template>
  <button @click="fetchData">Fetch Data</button>
  <div v-if="store.items">
    <p>Location: {{ store.items.results[0].location.city }}</p>
    <p>Location: {{ store.city }}</p>
  </div>
</template>
