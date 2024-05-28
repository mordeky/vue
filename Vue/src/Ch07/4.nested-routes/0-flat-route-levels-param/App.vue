<template>
  <nav>
    <!-- 注意：`v-for="l in Num"` 在循环时`l`是从 1 开始的？ -->
    <!--
    <span v-for="l in 3" :key="l">
      {{l}},
    </span>
    -->
    <span v-for="l in ptr" :key="l">
      <span v-if="l > 1"> > </span>
      <!-- 注意：这里的 `@click="grow(l)"` 不必写为 `@click="(l) => grow(l)"` -->
      <router-link :to="{ name: nested[l-1][0] }" @click="grow(l)">
      {{ nested[l - 1][1] }}
      </router-link>
    </span>
  </nav>
  <!-- 注意：@updatePtr要放在哪里？放到<router-link>中？ -->
  <!-- 注意：`@updatePtr="grow"` 不必写为 `@updatePtr="(l) => grow(l)"` -->
  <router-view @updatePtr="grow"/>
</template>

<script setup>
import {ref} from "vue";
import {norm} from "./norms.js";

const L = 3
const ptr = ref(1)

const nested = [[norm('home'), 'Home']]
for (let l = 1; l < L; l++)
  nested.push([norm(`level${l}`), `Level ${l}`])

function grow(l) {
  // if (l === nested.length)
  //   return
  ptr.value = l // * 1
}
</script>