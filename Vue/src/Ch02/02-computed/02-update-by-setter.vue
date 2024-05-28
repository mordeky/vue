<!-- https://vuejs.org/guide/essentials/computed#writable-computed -->

<template>
  <span>{{ fullName }}</span>
</template>

<script setup>
import {ref, computed} from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    console.log('fullName is updated: its getter() is called!')
    console.log(`lastName.value = '${lastName.value}'`)
    return firstName.value + ' ' + lastName.value
    // return firstName.value + ' xx ' + lastName.value
    // return 'Hello World!'
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

fullName.value = 'John Smith'
// console.log(fullName)
console.log(`fullName.value = '${fullName.value}'`)
console.log(`lastName.value = '${lastName.value}'`)

console.log('\n\n')

</script>
