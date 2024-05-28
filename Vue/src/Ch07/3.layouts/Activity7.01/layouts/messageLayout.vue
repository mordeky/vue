<template>
  <div class="message">
    <h1>Message Content</h1>
    <main>
      <slot/>
    </main>
    <button @click="goBack">Back</button>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

function goBack() {
  if (route.params.from) {
    router.go(-1)
    return
  }

  router.push({name: 'messages'})
}
</script>

<!--<script>
export default {
  methods: {
    goBack() {
      if (this.$route.params.from) {
        this.$router.go(-1)
      }
      else {
        this.$router.push({
          name: 'messages'
        })
      }
    }
  }
}
</script>
-->