<template>
  <div>
    We can use mustache syntax (double curly braces) to define an area
    where you can inject data into a component’s HTML template.
    <h1>{{ isUppercase ? title.toUpperCase() : title }}</h1>
  </div>
</template>

<!--
<script>
export default {
  data() {
    return {
      title: "My first component in Exercise1-02!",
      isUppercase: false,
    };
  },
};
</script>
-->

<script setup>
const title = 'My first component in Exercise1-02!';
const isUppercase = true;
</script>

<style>
h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
