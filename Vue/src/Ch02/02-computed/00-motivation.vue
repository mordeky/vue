<!-- See Also: Example 2.01 -->

<template>
  <div>
    Email Box: <input v-model="emailBox"/>
    <div>
      <span style="color:red;">{{ error }}</span>
    </div>
    <br>
    First Name: <input v-model="firstName"/><br>
    Last Name: <input v-model="lastName"/>
    <div>
      Your full name: <span style="color:black;font-weight: bold">{{ fullName }}</span>
    </div>
  </div>
</template>


<script setup>
import {ref, computed} from 'vue'

const emailBox = ref('');

const error = computed(() => {
  if(!emailBox.value.trim()) return
  return emailBox.value.includes('@') ? "" : "Invalid email box!";
})

// console.log(error2)

const firstName = ref('')
const lastName = ref('')

const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value
})

</script>

