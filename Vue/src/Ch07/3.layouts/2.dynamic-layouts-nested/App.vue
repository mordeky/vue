<script setup>
import Layout1 from './Layout1.vue'
import {shallowRef} from 'vue'
/*
const url = shallowRef(window.location.href);
function get_url() {
  url.value = window.location.href
}
*/

const expand = shallowRef(false)

const layout = shallowRef(Layout1)

function updateLayout(newLayout) {
  layout.value = newLayout
}

</script>

<template>
  <nav style="text-align: center">
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/update">Update</RouterLink>
    |
    <RouterLink to="/switch">Switch</RouterLink>
  </nav>
  <br>

  <router-view/>
</template>
