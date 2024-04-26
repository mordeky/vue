<template>
  <h1>{{ msg }}</h1>
  <Child v-model="msg"/>
</template>

<script setup>
import {ref} from 'vue'
import Child from './03-component.vue'  // 文件名区分大小写

const msg = ref('Hello World!')
</script>
