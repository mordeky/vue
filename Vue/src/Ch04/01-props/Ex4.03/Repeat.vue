<template>
  <div>
    <span v-for="r in repetitions" :key="r">
      {{ config.content }}
    </span>
  </div>
</template>

<script setup>
const {config} = defineProps({
  config: {
    type: Object,
    validator(value) {
      return typeof value.times === 'number' &&
          typeof value.content === 'string'
    }
  }
})
const repetitions = config.times
</script>

<!--
<script>
export default {
  props: {
    config: {
      type: Object,
      validator(value) {
        return typeof value.times === 'number' &&
          typeof value.content === 'string'
      }
    }
  },
  computed: {
    repetitions() {
      return Array.from({ length: this.config.times })
    }
  }
}
</script>
-->
