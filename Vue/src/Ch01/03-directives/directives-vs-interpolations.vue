<template>
  <div>
    <h3 v-text="text"/>
    <h3>{{ text }}</h3>
    <hr>

    <h3 v-html="html"/>
    <h3>{{ html }}</h3>
    <hr>

    <h3>{{ link.title }}</h3>
    <h3>{{ new_link.title }}</h3>
  </div>
</template>

<script setup>

const text = "Directive text"
const html = "Stylise <u>HTML</u> in <em>your</em> data."

const link = {
  title: "Go to Google",
}

class NewLink {
  title = "Go to Baidu"
}
const new_link = new NewLink()

</script>

