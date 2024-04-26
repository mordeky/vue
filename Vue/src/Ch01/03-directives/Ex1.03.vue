<template>
  <div>
    <h1 v-show="v_show" v-once v-text="text"/>
    <h2 v-show="v_show" v-html="html"/>
    <a
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
    />
    <hr>

    <h1 v-if="text_show" v-once v-text="text" />
    <h2 v-else-if="html_show" v-html="html" />
     <a
      v-else
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />
  </div>
</template>

<script setup>
// const v_show = true
const v_show = false
const text_show = true
const html_show = true

const text = "Directive text"
// v-html
const html = "Stylise</br>HTML in<br/><b>your data</b>"

// v-bind
const link = {
  url: "https://google.com",
  target: "_blank",
  tabindex: "0",
  title: "Go to Google",
}
</script>

<!--
<script>
export default {
  data() {
    return {
      // v-text
      text: "Directive text",
      // v-html
      html: "Stylise</br>HTML in<br/><b>your data</b>",
      // v-bind
      link: {
        url: "https://google.com",
        target: "_blank",
        tabindex: "0",
        title: "Go to Google",
      },
    };
  },
};
</script>
-->

<style scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}

a {
  display: block;
  margin-top: 40px;
}
</style>
