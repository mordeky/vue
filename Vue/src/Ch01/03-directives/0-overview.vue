<template>
  <div v-text="msg"/>
  <!--注意下面的语句会报错：v-text will override element children. -->
  <!-- <div v-text="msg">My placeholder</div> -->

  <hr>
  <div v-html="html"/>
  <div>{{ html }}</div>

  <hr>
  <!-- 当 logo 作为变量传入模板中的<img>的`src`属性时，
       不能是相对路径，也不能是`@`开头的绝对路径；
       但在模板中，两种方式都可以使用，浏览器会将其直接解析为绝对路径。
  -->
  <!--<img alt="Vue logo" v-bind:src="logo" width="50" height="50"/>-->
  <img alt="Vue logo" :src="logo" width="50" height="50"/>
  <img alt="Vue logo" src="@/assets/logo.svg" width="50" height="50"/>
  <img alt="Vue logo" src="../../assets/logo.svg" width="50" height="50"/>

  <hr>
  <input type="text" v-model="msg"/>
  <br>
  <span>{{ msg }}</span>

  <hr>
  <!--<button v-on:click="onClick(arg)"> Click Me</button>-->
  <button @click="onClick(arg)"> Click Me</button>
  <br>
  <h4 v-show="true">Show Me!</h4>
  <!--<h4 v-show="false">Show Me!</h4>-->
  <div v-if="showDiv">Show Me!</div>
  <a v-else href="https://www.baidu.com/">Baidu</a>

  <hr>
  <!-- 注意，使用v-for指令时，item 和 index 的区别 -->
  <div v-for="(item, index) in 5" :key="index">
    item: {{ item }}, index: {{ index }}
  </div>

  <BaseModal>
    <!--<template v-slot:header>-->
    <template #header>
      <h1> Some header </h1>
    </template>
  </BaseModal>
</template>

<script setup>
// const msg = "Hello World!"
import {ref} from "vue";
import BaseModal from "@/Ch04/02-slots/03-ScopedSlots/2-BaseModal.vue";

const msg = ref("Hello World!")
const html = "Stylise <u>HTML</u> in <em>your</em> data."

// const logo = '@/assets/logo.png';
// const logo = '../../assets/logo.svg';
const logo = '/src/assets/logo.png';

// let showDiv = false
let showDiv = ref(false)

function onClick() {
  console.log('I am clicked!')
  // showDiv = showDiv ? false : true
  // showDiv.value = showDiv.value ? false : true
  showDiv.value = !showDiv.value
}
</script>
