<template>
  <div id="app">
    <MessageFeed :messages="messages" />
    <MessageEditor @send_xx="onSend($event)" />
    <MessageEditor @send_xx="onSend" />
  </div>
</template>

<script setup>
import MessageEditor from './MessageEditor.vue'
import MessageFeed from './MessageFeed.vue'
import {ref} from "vue";

const messages = ref([])
function onSend(event) {
  // console.log(event)
  messages.value = [...messages.value, event]
  console.log(messages)
}
</script>