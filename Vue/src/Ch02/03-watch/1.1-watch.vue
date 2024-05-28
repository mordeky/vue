<!-- See Also: Exercise 2.03 -->

<template>
  <div class="container">
    <h1>Shop Watcher</h1>
    <div>
      Black Friday sale
      <del>Was {{ oldDiscount }}%</del>
      <strong> Now {{ discount }}% OFF</strong>
    </div>
    <button @click="updateDiscount">Increase Discount!</button>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";

const oldDiscount = ref(0)
const discount = ref(5)

function updateDiscount() {
  oldDiscount.value = discount.value;
  discount.value += 5;
}

watch(
    discount,
    (newValue, oldValue) => {
      oldDiscount.value = oldValue;
    }
)
</script>


<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
}

button {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
