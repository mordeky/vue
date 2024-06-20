<script setup>
import {useCounterStore} from './store.js';

const counterStore = useCounterStore();
// counterStore.restoreFromLocalStorage();

function increment() {
  counterStore.increment();
  console.log(counterStore.count)
}
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
