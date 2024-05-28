<template>
  <div style="border:1px solid #000; padding: 7px">
    <h1>{{msg}}</h1>

    <router-link
        :to="{ name: nextName }"
        @click="emits('updatePtr', nextPtr)"
    >
      {{nextTitle}}
    </router-link>

    <!--<router-view/> -->
  </div>
</template>

<script setup>
defineProps(['msg', 'nextName', 'nextPtr', 'nextTitle'])
const emits = defineEmits(['updatePtr'])
</script>
