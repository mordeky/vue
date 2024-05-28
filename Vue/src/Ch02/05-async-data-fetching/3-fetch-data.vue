<!-- See Also: Exercise 2.05 -->

<template>
  <div class="container">
    <h1>Async fetch</h1>

    <button @click="fetchAdvice()">
      {{ loading ? "Loading..." : "Learn something profound" }}
    </button>

    <blockquote v-if="quote">{{ quote }}</blockquote>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref, reactive, computed} from "vue";

const url = "https://api.adviceslip.com/advice"
const loading = ref(false)

// const axiosResponse = ref()
const axiosResponse = reactive({})

const quote = computed(() => {
  return getQuote(axiosResponse);
})

function getQuote(data) {
  return data && data.slip ? data.slip.advice : null;
}


/*async*/
function fetchAdvice() {
  loading.value = true;
  /*await*/
  axios
      .get(url)
      .then(response => {
        // axiosResponse = response.data
        // axiosResponse.value = response.data
        // Object.assign(axiosResponse, response.data)
        axiosResponse.slip = response.data.slip
      })
      .catch(error => console.log(error))
      .finally(() => {
        setTimeout(() => {
          loading.value = false;
        }, 500)
      })
}

/*
async function fetchAdvice() {
  loading.value = true;
  try {
    const response = await axios.get(url)
    axiosResponse.slip = response.data.slip
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 500)
  }
}
*/


/*async*/
function fetchAdvice1() {
  loading.value = true;
  /*await*/
  fetch(url)
      .then(response => response.json())
      .then(data => axiosResponse.slip = data.slip)
      .catch(error => console.log(error))
      .finally(() => {
        setTimeout(() => {
          loading.value = false;
        }, 500)
      })
}


async function fetchAdvice11() {
  loading.value = true;
  try {
    const response = await fetch(url)  // response是一个 Stream 对象
    // const data = response.json()
    const data = await response.json() // response.json()是一个异步操作，取出所有内容，并将其转为 JSON 对象
    // quote1.value = getQuote(data)
    axiosResponse.slip = data.slip
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
}
</script>

<style scoped>
@import "./3-style.scss";
</style>
