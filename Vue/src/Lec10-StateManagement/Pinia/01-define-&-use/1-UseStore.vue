<script setup>
import {useCounterStore} from './stores/option-store.js';
// import {useCounterStore} from './stores/setup-store.js';

// the `store` is an object wrapped with reactive
const store = useCounterStore();
</script>

<template>
  <div>
    store.name: <input v-model="store.name"/><br>
    store.name: <span class="display">{{ store.name }}</span><br>

    store.count: <input v-model="store.count"/><br>
    store.count: <span class="display">{{ store.count }}</span><br>

    <hr>
    Count: <span class="display">{{ store.count }}</span><br>
    Double Count: <span class="display">{{ store.doubleCount }}</span><br>
    <button @click="store.increment">Increment</button>
  </div>
</template>

<style>
.display {
  text-decoration: underline
}
</style>