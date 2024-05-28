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
import {ref, computed} from "vue";

const discount = ref(5)

const temp = ref(0)
const oldDiscount = computed({
  get(){
    return temp.value
  },
  set(val){
    temp.value = val
  }
})

temp.value = 3

function updateDiscount() {
  // 通过这种方法可以 “写”`oldDiscount`的值，
  // 但有趣的是，这种方法并非直接写`oldDiscount`的值，
  // 还需要通过一个中间变量`temp`把要写给`oldDiscount`的值缓存一下。
  // 这样做就把`oldDiscount`和`temp`绑定了
  // 其危险性在于，当`temp`的值发生改变的时候，会触发`oldDiscount`的get()方法，从而改变其值
  oldDiscount.value = discount.value;
  discount.value += 5;
}

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
