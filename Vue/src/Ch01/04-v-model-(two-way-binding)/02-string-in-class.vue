<template>
  <div>
    <h4>{{ counter.msg.value }}</h4>
    <input type="text" v-model="counter.msg.value"/><br>
    <button @click="counter.switch()">Switch</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

class Counter {
  msg = ref('Hello World!')

  switch(){
    this.msg.value = this.msg.value === 'Hello World!'? 'Hello Vue!' : 'Hello World!'
  }
}
const counter = new Counter()

</script>
