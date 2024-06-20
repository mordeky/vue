<script setup>
import {ref, reactive} from "vue";

const obj = {
  name: 'Jack',
  // name: ref('Jack'),
  age: 22,
  // 注意在`对象`中定义方法，最好不使用`funName: () => {}`
  increaseAge() {
    this.age++
  }
}

const reactObj = reactive(obj)
const {increaseAge} = reactObj;
const {name, age} = reactObj;
// const {name, age} = storeToRefs(reactObj);
</script>

<template>
  <div>
    name: <input v-model="name"/><br>
    obj.name: <input v-model="obj.name"/><br>
    reactObj.name: <input v-model="reactObj.name"/><br>

    obj.name: <span class="display">{{ obj.name }}</span><br>
    reactObj.name: <span class="display">{{ reactObj.name }}</span><br>

    <hr>
    <span>obj.age: {{ obj.age }}</span><br>
    <span>reactObj.age: {{ reactObj.age }}</span><br>
    <button @click="increaseAge">Increase by `increaseAge`</button><br>
    <button @click="obj.increaseAge">Increase by `obj.increaseAge`</button><br>
    <button @click="reactObj.increaseAge">Increase by `reactObj.increaseAge`</button>
  </div>
</template>

<style>
.display {
  text-decoration: underline
}
</style>