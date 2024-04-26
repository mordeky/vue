<template>
  <div>
    {{msg}}
  </div>
  <!--  <div v-html="msg"/>-->
</template>

<script>
export default {
  props: ['msg'],
};
</script>
