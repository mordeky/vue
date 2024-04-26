<template>
  <div>
    <h3>{{ counter.count }}</h3>
    <input type="text" v-model="counter.count"/><br>
    <button @click="counter.value.increase()">Increase</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

class Counter {
  count = 0
  increase(){
    console.log('increaseCount() is called!')
    this.count++
    console.log(this.count)
  }
}
const x = new Counter()
const counter = ref(x)

</script>
