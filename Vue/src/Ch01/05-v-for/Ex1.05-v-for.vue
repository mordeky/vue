<template>
  <div>
    <h1>Looping through arrays</h1>
    <ul>
      <!--<li v-for="(item, n) in interests" :key="n">-->
      <li v-for="(item, n) in interests">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const interests = ["TV", "Games", "Sports"]
</script>

<style scoped>
li {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
