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
// const {id} = defineProps(['id'])
const {id, name, age} = defineProps(['id', 'name', 'age'])
</script>


