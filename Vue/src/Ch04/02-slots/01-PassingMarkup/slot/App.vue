<template>
  <div>
    <Box>
      <h3>This whole h3 is rendered in the slot with parent count {{ count }}</h3>
    </Box>
    <button @click="count++">Increment</button>
  </div>
</template>

<script setup>
import Box from './Box.vue'
import {ref} from "vue";

const count = ref(0)

</script>