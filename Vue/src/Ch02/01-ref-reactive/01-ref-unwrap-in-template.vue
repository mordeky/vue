<template>
  <!--
    https://vuejs.org/guide/essentials/reactivity-fundamentals#ref
    We did not need to append `.value` when using the ref in the template.
    For convenience, refs are automatically unwrapped when used inside templates (with a few caveats).
  -->
  <button @click="count++">
    count&nbsp;=&nbsp;{{ count }}
  </button>

  <hr>
  <button @click="increment">
    count&nbsp;=&nbsp;{{ count }}
  </button>
</template>

<script setup>
import {ref} from 'vue'

const count = ref(0)
function increment(){
  count.value++
}
</script>
