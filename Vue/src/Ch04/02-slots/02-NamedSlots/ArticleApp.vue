<script setup>
import Article from './Article.vue'
</script>

<template>
  <div>
    <Article>
      <!--<template v-slot:title>-->
      <template #title>
        <h3>My Article Title</h3>
      </template>
      <template #excerpt>
        <p>First paragraph of content</p>
        <p>Second paragraph of content</p>
      </template>
    </Article>
  </div>
</template>
