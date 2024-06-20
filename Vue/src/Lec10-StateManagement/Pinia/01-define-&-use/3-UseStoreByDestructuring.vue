<script setup>
import {storeToRefs} from 'pinia'
import {useCounterStore} from './stores/option-store.js';
// import {useCounterStore} from './stores/setup-store.js';

// the `store` is an object wrapped with reactive
const store = useCounterStore();

{
  // ❌ This won't work because it breaks reactivity
  // it's the same as destructuring from `props`
  const {name, doubleCount} = store
  console.log(name) // `name` will always be "Eduardo"
  console.log(doubleCount) // `doubleCount` will always be 0
}

// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const {name, doubleCount} = storeToRefs(store)

// the increment action can just be destructured
const {increment} = store

</script>

<template>
  <div>
    name: <input v-model="name"/><br>
    store.name: <input v-model="store.name"/><br>
    name: <span class="display">{{ name }}</span><br>
    store.name: <span class="display">{{ store.name }}</span><br>
    <hr>
    <span>Count: {{ store.count }}</span><br>
    <button @click="increment">Increase by `increment`</button><br>
    <button @click="store.increment">Increase by `store.increment`</button>
  </div>
</template>

<style>
.display {
  text-decoration: underline
}
</style>