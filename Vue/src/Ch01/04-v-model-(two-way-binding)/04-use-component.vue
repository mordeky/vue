<template>
  <h4>{{ title }}</h4>
  <MyComponent v-model:title_zz="title"/>
</template>

<script setup>
import {ref} from 'vue'
import MyComponent from './04-component.vue'

const title = ref('v-model argument example')
</script>
