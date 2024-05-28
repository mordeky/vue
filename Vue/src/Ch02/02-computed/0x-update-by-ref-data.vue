<template>
  <div>
    <button @click="switchName1()">Switch Name1</button><span>{{ msg1 }}</span><br>
    <button @click="switchName2()">Switch Name2</button><br>
    <button @click="switchName3()">Switch Name3</button><span>{{ msg3 }}</span>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'

const name1 = ref('1');
const name2 = ref('2');
let name3 = '3';

const tab = '    '
const msg1 = computed(() => {
  console.log('msg1 is computed!')
  return tab + name1.value
})

const msg2 = computed(() => {
  console.log('msg2 is computed!')
  return tab + name2.value
})

const msg3 = computed(() => {
  console.log('msg3 is computed!')
  return tab + name3
})

function switchName1() {
  name1.value = name1.value === '1' ? '1\'' : '1'
}

function switchName2() {
  name2.value = name2.value === '2' ? '2\'' : '2'
}

function switchName3() {
  name3 = name3 === '3' ? '3\'' : '3'
}

/*console.log(msg1.value)
console.log(msg2.value)
switchName1()
switchName2()
console.log(msg1.value)
console.log(msg2.value)*/
</script>

