<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <ul>
      <li>{{ items[0] }}</li>
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
    </ul>
  </div>
</template>

<script setup>
const title = "My list component!"
const subtitle = "Vue JS basics"
const items = ["Item 1", "Item 2", "Item 3"]
</script>

<style scoped lang="scss">
@import '@/styles/typography.scss';

h1 {
  font-size: 50px;
  color: $color-blue; // Use variables from imported stylesheets
}
</style>
