<template>
  <div>
    <router-link :to="{ name: 'list' }">List</router-link> |
    <router-link :to="{ name: 'editor' }">Editor</router-link> |
    <router-link to="/message/0">MSG0</router-link>
    <router-view v-slot="{ Component }"> <!-- 这里相当于定义了一个插槽 -->
      <component
        :is="Component"
        :list="messages"
        @list:update="addMessage"
      />
      <!--
        1. `:list` 表示传入的组件`Component`定义了`list`这个属性，e.g.,
            路由`/list` 和 `/editor` 指向的组件`MessageList`和`MessageEditor`
            都定义了`list`属性；
        2. `@list:update`表示监听的是一个`list:update`事件。
       -->
    </router-view>
  </div>
</template>

<script setup>
import DefaultLayout from '../layouts/default.vue';
import { useRoute } from "vue-router";
import { reactive } from "vue";

const route = useRoute();
/*const props = */
/*const {messages} =*/ defineProps({
  // messages: {
  //   type: Array,
  //   default: () => reactive([])
  // },
  currentLayout: {
    type: Object,
    default: () => DefaultLayout,
  },
});
const messages = reactive(route.meta.messages || []);

const emits = defineEmits(["update:currentLayout"]);
emits('update:currentLayout', DefaultLayout);

const addMessage = (message) => {
  messages.push(message);
};
</script>
