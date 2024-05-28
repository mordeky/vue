<script setup>
import Layout1 from './Layout1.vue'
import {shallowRef} from 'vue'

const layout = shallowRef(Layout1)

function updateLayout(newLayout) {
  layout.value = newLayout
}

</script>

<template>
  <component :is="Layout1" arg="World">
    <router-view/>
  </component>
  <hr>
  <component :is="layout" arg="World">
    <router-view/>
  </component>

  <hr>
  <component :is="layout" arg="World">
    <router-view
        @update-layout="updateLayout"
    />
    <!--
        特别注意上面`<router-view>`中的参数调用：
        1. 如果有参数传入，则不必写成箭头函数的形式；
        2. 写成`@event="handle(arg)"`，属于错误表达：无法解析参数`arg`；
        3. 如果没有参数传入，写成`@event="handle"`或`@event="handle()"`都可以；
        4. 如果用到部分运行环境中的参数，e.g.,循环体中的变量，
           则须写成箭头函数的形式：`@event="()=>handle(i)"`
     -->
  </component>

  <hr>
  <component :is="layout" arg="World">
    <router-view
        :curLayout="layout"
        @update-layout="newLayout => layout = newLayout"
    />
  </component>
</template>
