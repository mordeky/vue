<template>
  <div>
    <h4>{{ msg }}</h4>
    <input type="text" v-model="msg"/><br>
    <button @click="switch_z()">Switch</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let msg = ref('Hello World!')

function switch_z(){
  msg.value = msg.value === 'Hello World!'? 'Hello Vue!' : 'Hello World!'
}

</script>
