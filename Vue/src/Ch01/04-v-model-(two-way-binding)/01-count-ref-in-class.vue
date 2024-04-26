<template>
  <div>
    <h3>{{ counter.count }}</h3>
    <input type="text" v-model="counter.count"/><br>
    <input type="text" v-model="counter.count.value"/><br>
    <button @click="counter.increase()">Increase</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

class Counter {
  count = ref(0)
  increase(){
    console.log('increaseCount() is called!')
    this.count.value++
    console.log(this.count.value)
  }
}
const counter = new Counter()

</script>
