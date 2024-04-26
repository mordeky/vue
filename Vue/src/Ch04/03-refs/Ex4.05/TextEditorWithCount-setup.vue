<template>
  <div>
    <textarea ref="textArea" cols="50" rows="7"/>
    <ul v-if="count">
      <!-- count.value.paragraphs is terribly wrong. Why? -->
      <!--<li>Paragraphs: {{ count.value.paragraphs }}</li>-->
      <li>Paragraphs: {{ count.paragraphs }}</li>
      <li>Sentences: {{ count.sentences }}</li>
      <li>Words: {{ count.words }}</li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
import * as Countable from 'countable'

const textArea = ref(null)
const count = ref(null)

onMounted(()=> {
  Countable.on(textArea.value, (_count) => {
    count.value = _count
    // console.log(count)
  })
})

onBeforeUnmount(()=> {
  Countable.off(textArea.value)
})
</script>
