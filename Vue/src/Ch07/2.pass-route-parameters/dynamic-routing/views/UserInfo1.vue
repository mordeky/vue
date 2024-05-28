<template>
  <div style="text-align: center; margin: auto">
    <!--<h1>About {{ $route.query.user }}</h1>-->
    <!--<h1>About User ID: {{ $route.params.id }}</h1>-->
    <h1>About User ID: {{ id }}</h1>
    <h2>Name: {{name}}</h2>
    <h3>Age: {{age}}</h3>
  </div>
</template>

<script setup>
import users from '../assets/users.js';
import {ref} from 'vue'

const name = ref('');
const age = ref(0);
const {id} = defineProps(['id'])
// const {id, name, age} = defineProps(['id', 'name', 'age'])
name.value = users[id - 1].name;
age.value = users[id - 1].age;
</script>


