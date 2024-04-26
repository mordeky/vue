<template>
  <div>{{ greeting }}</div>
</template>

<script>
const firstMixin = {
  mounted() {
    console.log('First mixin mounted hook')
  },
  data() {
    return {greeting: 'Hello World!'}
  }
}

const secondMixin = {
  mounted() {
    console.log('Second mixin mounted hook')
  },
  data() {
    return {greeting: 'Hi, World!'}
  }
}

export default {
  mixins: [firstMixin, secondMixin],
  data() {
    // return {greeting: 'Bad World!'}
  },
  mounted() {
    console.log('Component mounted hook')
  }
}
</script>
