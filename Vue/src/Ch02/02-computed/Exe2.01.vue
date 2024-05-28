<template>
  <div class="container">
    <input v-model="firstName" placeholder="First name"/>
    <input v-model="lastName" placeholder="Last name"/>
    <h3 class="output">{{ fullName }}</h3>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";

const firstName = ref('')
const lastName = ref('')

// fullName: computed property
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
</script>

<!--
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
}
</script>
-->

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}

input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}

.output {
  font-size: 16px;
}
</style>
