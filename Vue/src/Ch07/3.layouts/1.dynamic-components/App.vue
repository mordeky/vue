<script setup>
import Hello from './Hello.vue'
import HelloArg from './HelloArg.vue'
import HelloSlot from './HelloSlot.vue'

</script>

<template>
  <Hello/>
  <HelloArg arg="Rose"/>
  <HelloSlot arg="Arg">
    <h1 style="text-align: center">Hello Slot!</h1>
  </HelloSlot>

  <hr>
  <component :is="Hello"/>
  <component :is="HelloArg" arg="Rose"/>
  <component :is="HelloSlot" arg="Arg">
    <h1 style="text-align: center">Hello Slot!</h1>
  </component>

  <hr>
  <div v-for="(m, i) in [Hello, HelloArg]" :key="i">
    <component :is="m" arg="Rose"/>
  </div>
</template>
