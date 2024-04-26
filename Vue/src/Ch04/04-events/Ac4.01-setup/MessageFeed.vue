<template>
  <div>
    <p v-for="(m, i) in messages" :key="i">
      {{i}}: {{ m }} // setup
    </p>
  </div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    required: true
  }
})
</script>