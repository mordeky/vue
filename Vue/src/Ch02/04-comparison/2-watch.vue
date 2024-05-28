<!-- See Also: Example 4.02 -->

<template>
  <div>
    <button @click="getNewName()">
      Click to generate name
    </button>
    <p v-if="author">{{ author }}</p>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";

const data = ref()
const author = ref('')

watch(
    data,
    (newVal, oldVal) => {
      author.value = newVal.first
      if(!oldVal) return;
      alert(`Name changed from "${oldVal.first}" to "${newVal.first}".`)
    }
)

async function getNewName() {
  await fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(x => {
        data.value = x.results[0].name
      })
}
</script>