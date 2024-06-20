<script setup>
import {useCounterStore, useInitializeStore} from './store.js';

// useInitializeStore()

const counterStore = useCounterStore();
// 如果注释掉上面的`useInitializeStore()`，就需要使用下面一行的代码进行数据装载
counterStore.restoreFromLocalStorage();

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
