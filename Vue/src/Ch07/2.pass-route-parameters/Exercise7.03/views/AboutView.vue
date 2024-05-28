<template>
  <div class="about">
<!--    <h1>About {{ $route.params.user }}</h1>-->
<!--    <h1>About {{ // $route.query.user }}</h1>-->
    <h1>About {{user}}</h1><br>
<!--    <h2>{{age}}</h2>-->
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

// const user = $route.query.user
/*
import {useRoute} from "vue-router";
const route = useRoute();
const user = route.query.user
*/

/*const { user } =*/
defineProps({
  user: {
    default: '',
    type: String
  },
  // age: Number
})/**/
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
