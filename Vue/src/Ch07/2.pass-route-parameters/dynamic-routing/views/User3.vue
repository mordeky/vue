<template>
  <div style="text-align: center; margin: auto">
    <!--<h1>About {{ $route.query.user }}</h1>-->
    <!--<h1>About User ID: {{ $route.params.id }}</h1>-->
    <h1>About User ID: {{ id }}</h1>
  </div>
</template>

<script setup>
const {id} = defineProps(['id'])
</script>


