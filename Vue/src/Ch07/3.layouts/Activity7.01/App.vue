<script setup>
// import {RouterView} from 'vue-router'
import Default from './layouts/default.vue'
// import MSGLayout from './layouts/messageLayout.vue'
import {shallowRef, ref} from 'vue'

const layout = shallowRef(Default)
// layout.value = MSGLayout
// 注意，在模板中和在脚本中对 ref object 的使用和更新都是不同的，
//   在模板中始终不需要使用`.value`，连赋值也不需要用。

/*
  const layout = ref(Default)

  [Vue warn]: Vue received a Component that was made a reactive object.
  This can lead to unnecessary performance overhead and should be avoided
    by marking the component with `markRaw` or using `shallowRef` instead of `ref`.
 */
</script>

<template>
  <component :is="layout">
    <!-- 原来的`RouterView`中有`:currentLayout="layout"` 但感觉毫无用处 -->
    <RouterView
        @update:currentLayout="newLayout => layout = newLayout"
    />
  </component>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
