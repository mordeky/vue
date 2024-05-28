<template>
  <div>
    <h3>Message info: {{message_xx.sent}}</h3>
    <!--<p>{{message_xx.sent}}</p>-->
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

/*const { message } =*/
defineProps({
  /*id: {
    default: '',
    type: String
  },*/
  message_xx: {
    default: () => ({ sent: '' }),
    type: Object
  }
})
</script>