<template>
  <div style="border:1px dashed #000; padding: 7px">
    Welcome Home!<br>
    <router-link
        :to="{ name: norm('level1') }"
        @click="emits('updatePtr', 2)"
    >
      Go to Level 1
    </router-link>
    <router-view />
  </div>
</template>

<script setup>
import {norm} from "./norms.js";
const emits = defineEmits(['updatePtr'])
</script>