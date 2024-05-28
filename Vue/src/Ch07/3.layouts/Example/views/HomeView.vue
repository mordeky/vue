<!--<script>
import TheWelcome from '@/components/TheWelcome.vue'
import DefaultLayout from '../layouts/default.vue';

export default {
  name: 'HomeView',
  components: {
    TheWelcome,
  },
  props: ['currentLayout'],
  emits: ['update:currentLayout'],
  created() {
    this.$emit('update:currentLayout', DefaultLayout)
  }
}
</script>-->

<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import DefaultLayout from '../layouts/default.vue';

const props = defineProps(['currentLayout']);
const emits = defineEmits(["update:currentLayout"]);
// emits('update:currentLayout', DefaultLayout);
</script>

<template>
  <main>
    <TheWelcome/>
  </main>
</template>
