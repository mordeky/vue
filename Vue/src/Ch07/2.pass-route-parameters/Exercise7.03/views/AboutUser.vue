<template>
  <div >
    <h1>About a user {{ $route.params.id }}</h1>
<!--    <h1>About {{ $route.query.user }}</h1>-->
<!--    <h1>About {{user}}</h1><br>-->
<!--    <h2>{{age}}</h2>-->
  </div>
</template>

<script setup>

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
