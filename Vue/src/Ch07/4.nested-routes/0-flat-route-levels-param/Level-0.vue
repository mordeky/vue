<template>
    <!--
    注意，下面的Level组件的`next-ptr`的参数前如果不加`:`，
    则会把`2`作为字符串看待，并在控制台发出警告。
    -->
    <Level
        :next-name="norm('level1')"
        :next-ptr=2
        next-title="Go to Level 1"
        line-style="dashed"
    >
      Welcome Home!<br>
    </Level>
    <router-view />
</template>

<script setup>
import Level from "./Layout-V2.vue";
import {norm} from "./norms.js";
/*
注意：
  下面的`emits`的定义不是必须的，但在控制台会发出如下警告：
    Extraneous non-emits event listeners (updatePtr)
      were passed to component but could not be automatically inherited
      because component renders fragment or text root nodes.
      If the listener is intended to be a component custom event listener only,
      declare it using the "emits" option.
   为了消除这个警告，在`home->Level1->Level2`的链中，只要在home中定义`emits`就可以了。
*/
const emits = defineEmits(['updatePtr'])
</script>