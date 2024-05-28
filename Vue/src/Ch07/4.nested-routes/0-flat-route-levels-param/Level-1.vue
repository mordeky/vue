<template>
  <Level
      :next-name="norm('level2')"
      :next-ptr=3
      next-title="Go to Level 2">
    <h1>This is Level 1!</h1>
  </Level>

  <router-view/><!-- -->
</template>

<script setup>
import {norm} from "./norms.js";
import Level from "./Layout-V2.vue";
const emits = defineEmits(['updatePtr'])
</script>
