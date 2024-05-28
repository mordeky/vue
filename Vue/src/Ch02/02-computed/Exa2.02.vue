<template>
  <div>{{ formalName }}</div>
</template>

<script setup>
import {computed} from "vue";

const title = "Mr."
const surname = "Smith"

const formalName = computed(() => {
  return `${title} ${surname}`;
})

</script>

<!--
<script>
export default {
  data() {
    return {
      title: "Mr.",
      surname: "Smith",
    };
  },
  computed: {
    formalName() {
      return `${this.title} ${this.surname}`;
    },
  },
};
</script>
-->
