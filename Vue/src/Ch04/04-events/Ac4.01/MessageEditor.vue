<template>
  <div>
    <!--<textarea ref="textArea" @change="onChange"/>-->
    <textarea ref="textArea" @change="onChange($event)"/>

    <button @click="onSendClick()">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onChange(event) {
      this.message = event.target.value
    },
    onSendClick() {
      this.$emit('send_xx', this.message)
      this.message = ''
      this.$refs.textArea.value = ''
    }
  }
}
</script>
