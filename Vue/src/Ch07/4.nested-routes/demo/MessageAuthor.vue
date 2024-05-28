<template>
  <h3>Author: {{message_xx.author}}</h3>
  <!--<p></p>-->
</template>

<script setup>
import { defineProps } from 'vue'

/*const { message } = */
defineProps({
  id: {
    default: '',
    type: String
  },
  message_xx: {
    default: () => ({ author: '' }),
    type: Object
  }
})
</script>