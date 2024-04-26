<script setup>
// import { defineProps } from 'vue'

defineProps({
  msg: {
    type: String,
    // required: true,
    default: 'Hi, World',
    validator(value) {
      return value.includes('!')
    }
  }
})

/*
const { msg } = defineProps({msg: String })
const {msg} = defineProps({
  msg: {
    type: String,
    required: true
  }
})
*/
</script>

<!--
<script>
export default {
  // name: 'HelloWorld',
  props: ['msg']
}
</script>
-->

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>
