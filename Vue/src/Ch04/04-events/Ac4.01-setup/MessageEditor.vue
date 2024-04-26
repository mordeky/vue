<template>
  <div>
    <textarea v-model="message"/>
    <!--
    <textarea ref="textArea" @change="onChange"/>
    -->
    <button @click="onSendClick()">Send</button>
  </div>
</template>

<script setup>
import {ref, defineEmits} from 'vue'

const message = ref('')
const emits = defineEmits(['send_xx'])

function onSendClick() {
  emits('send_xx', message.value)
  message.value = ''
  // textArea.value = ''
}
/*
function onChange(event) {
  console.log('onChange!')

  // console.log(event)
  // event.target 指向 TextArea
  // textArea = event.target
  message.value = event.target.value
}
*/
</script>
