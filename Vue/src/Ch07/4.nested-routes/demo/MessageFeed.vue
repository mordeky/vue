<template>
  <div>
    <div v-for="(m, i) in messages" :key="i">
<!--      <RouterLink :to="`/message/${i}`">-->
      <RouterLink :to="{name:'message', params: {id: i}}">
        {{ m.content }}
      </RouterLink>
    </div>
    <!--
      这里，我们期望用户每次点击消息后，信息直接显示在这里。
      但，似乎这里`RouterView`的设置完全没用
    -->
    <RouterView/>
  </div>
</template>

<script setup>
// import messages from './messages.js'
defineProps(['messages'])
</script>
