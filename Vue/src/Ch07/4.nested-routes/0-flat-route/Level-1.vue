<template>
  <div style="border:1px solid #000; padding: 7px">
    <h1>This is Level 1!</h1>

    <router-link
        :to="{ name: norm('level2') }"
        @click="emits('updatePtr', 3)"
    >
      Go to Level 2
    </router-link>

    <router-view/>
  </div>
</template>

<script setup>
import {norm} from "./norms.js";
const emits = defineEmits(['updatePtr'])
</script>
