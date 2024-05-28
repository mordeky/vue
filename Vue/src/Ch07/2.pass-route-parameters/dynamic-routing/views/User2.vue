<template>
  <div style="text-align: center; margin: auto">
    <!--<h1>About {{ $route.query.user }}</h1>-->
    <!--<h1>About User ID: {{ $route.params.id }}</h1>-->
    <h1>About User ID: {{ id }}</h1>
<!--    <h1>About User ID: {{ get_id() }}</h1>-->
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
// import {ref} from "vue";

const route = useRoute()
const id = route.params.id
// const id = ref(route.params.id)
// const id = ref()
// id.value = route.params.id

function get_id(){
  return route.params.id
}
</script>