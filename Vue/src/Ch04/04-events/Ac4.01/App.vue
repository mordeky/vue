<template>
  <div id="app">
    <MessageFeed :messages="messages" />
    <MessageEditor @send_xx="onSend($event)" />
    <MessageEditor @send_xx="onSend" />
  </div>
</template>

<script>
import MessageEditor from './MessageEditor.vue'
import MessageFeed from './MessageFeed.vue'
export default {
  components: {
    MessageEditor,
    MessageFeed
  },
  data() {
    return { messages: [] }
  },
  methods: {
    onSend(event) {
      // console.log(event)
      this.messages = [...this.messages, event]
      // console.log(this.messages)
    }
  }
}
</script>