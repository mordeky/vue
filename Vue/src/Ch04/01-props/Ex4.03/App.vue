<template>
  <main>
    <Repeat :config="{ times: 3, content: 'Repeat me! ' }" />
  </main>
</template>

<script setup>
import Repeat from './Repeat.vue'
</script>
