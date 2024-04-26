<!--
<script>
import HelloWorld_xxx from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: { HelloWorld_xxx }
}
</script>
-->

<script setup>
import HelloWorld_xxx from './HelloWorld.vue'
import {ref} from "vue";

const msg = ref('You did it!')
// const msg = 'You did it!'

</script>

<template>
  <input type="text" v-model="msg"/><br>
  <div class="wrapper">
    <HelloWorld_xxx :msg="msg"/><br>
  </div>
  <div class="wrapper">
    <HelloWorld_xxx msg="Hello World!"/>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>