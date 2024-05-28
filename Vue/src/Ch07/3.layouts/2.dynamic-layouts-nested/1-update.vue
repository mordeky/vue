<template>
  <div style="text-align: center">
    <h3>Hello World!</h3>
    <button @click="updateLayout">Update Layout</button>
  </div>
</template>

<script setup>
import Layout2 from './Layout2.vue';

const emits = defineEmits(["update-layout"]);
function updateLayout(){
  emits('update-layout', Layout2);
}
</script>
