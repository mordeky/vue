<template>
  <div>
    <h2> Message Feed </h2>
    <div v-for="(m, i) in messages" :key="i" >
      <RouterLink :to="`/message?content=${m}`">
        {{ m }}
      </RouterLink>
    </div>
</div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    default: [],
  }
})
</script>