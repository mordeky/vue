<template>
  <div>
    <textarea ref="textArea" cols="50" rows="7"/>
    <ul v-if="count">
      <li>Paragraphs: {{ count.paragraphs }}</li>
      <li>Sentences: {{ count.sentences }}</li>
      <li>Words: {{ count.words }}</li>
    </ul>
  </div>
</template>

<script>
import * as Countable from 'countable'
export default {
  mounted() {
    Countable.on(this.$refs.textArea, (count) => {
      this.count = count
      // console.log(count)
    })
  },
  beforeUnmount() {
    Countable.off(this.$refs.textArea)
  },
  data() {
    return { count: null }
  }
}
</script>
