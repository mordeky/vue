<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import messages from './assets/messages.js'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/eg1/user/1">User 1</RouterLink>
      <RouterLink :to="{name: 'eg1', params: {id: 2}}">User 2</RouterLink>
      <hr>
      <RouterLink to="/eg2/user/3">User 3</RouterLink>
      <RouterLink to="/eg2/user/4">User 4</RouterLink>
      <hr>
      <RouterLink to="/eg3/user/5">User 5</RouterLink>
      <RouterLink to="/eg3/user/6">User 6</RouterLink>
      <RouterLink to="/eg3/user/7">User 7</RouterLink>
      <hr>
      <RouterLink to="/eg4/user/1">User 1</RouterLink>
      <RouterLink to="/eg4/user/2">User 2</RouterLink>
      <hr>
      <RouterLink to="/eg5/user/1">User 1</RouterLink>
      <RouterLink to="/eg5/user/2">User 2</RouterLink>
      <hr>
      <RouterLink to="/eg6/user/1">User 1</RouterLink>
      <RouterLink to="/eg6/user/2">User 2</RouterLink>
      <hr>
      <RouterLink to="/users">Users</RouterLink>
    </nav>
  </header>
  <hr>
  <RouterView/>
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
  font-size: 20px;
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
<script setup>
</script>