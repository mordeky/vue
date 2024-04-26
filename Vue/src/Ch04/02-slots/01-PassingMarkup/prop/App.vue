<template>
  <div>
    <Box msg="<h3>This whole h3 is rendered in the slot with parent count {{ count }}</h3>"/>
<!--    <button @click="count++">Increment</button>-->
    <button @click="increase">Increment</button>
  </div>
</template>

<script setup>
import Box from './Box.vue'
import {ref} from "vue";

const count = ref(0)
function increase(){
  console.log('hi!!!!!')
  count.value++;
  console.log(count.value)
}
</script>