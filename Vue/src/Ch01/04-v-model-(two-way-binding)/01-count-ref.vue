<template>
  <div>
    <h3>{{ count }}</h3>
    <input type="text" v-model="count"/><br>
    <button @click="increase()">Increase</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(0)
function increase(){
  console.log('increaseCount() is called!')
  count.value++
  console.log(count.value)
}
</script>
