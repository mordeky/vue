<template>
  <h1 style="text-align: center">
    Hello {{arg}}!
  </h1>
  <slot/>
</template>

<script setup>
defineProps(['arg'])
</script>
