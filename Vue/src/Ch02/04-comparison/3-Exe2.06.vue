<template>
  <div class="container">
    <h1>Methods vs watchers vs computed props</h1>

    <div class="col">
      <input type="text" placeholder="Search with method" v-model="input"
             @keyup="searchMethod"/>

      <ul>
        <li v-for="(item, i) in methodFilterList" :key="i">{{ item }}</li>
      </ul>
    </div>

    <div class="col">
      <input type="text" placeholder="Search with computed" v-model="input2"/>

      <ul>
        <li v-for="(item, i) in computedList" :key="i">{{ item }}</li>
      </ul>
    </div>

    <div class="col">
      <input type="text" placeholder="Search with watcher" v-model="input3"/>

      <ul>
        <li v-for="(item, i) in watchFilterList" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed, watch} from "vue";

// Shared
const frameworkList = [
  "Vue",
  "React",
  "Backbone",
  "Ember",
  "Knockout",
  "jQuery",
  "Angular",
]

// Method
const input = ref("")
const methodFilterList = ref([])

// Computed
const input2 = ref("")

// Watcher
const input3 = ref("")
const watchFilterList = ref([])

/*created() {
  searchMethod();
}*/

function filter(inputVal) {
  return frameworkList.filter((item) =>
      item.toLowerCase().includes(inputVal.toLowerCase())
  );
}

watch(
    input3,
    () => {
      watchFilterList.value = filter(input3.value)
    },
    {
      immediate: true,
    },
)

const computedList = computed(() => {
  return filter(input2.value);
})

function searchMethod() {
  console.log('searchMethod() is called!')
  methodFilterList.value = filter(input.value)
}

searchMethod()

</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.col {
  width: 33%;
  height: 100%;
  float: left;
}

input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>
