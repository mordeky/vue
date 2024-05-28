<!-- See Also: Exercise 2.04 -->

<template>
  <div class="container">
    <h1>Deep Watcher</h1>
    <div>
      <h4>{{ product.label }}</h4>
      <h5>${{ product.juice.price }} (${{ discount }} Off)</h5>
    </div>
    <button @click="updatePrice">Reduce Price!</button>
  </div>
</template>

<!---->
<script setup>
import {ref, reactive, watch} from "vue";

const discount = ref(0) // 注意，它与watch options中的immediate的关系！

/**
 * 下面的`product`所代理的对象不包含嵌套结构，
 *   此时，即使设置`watch()`的`deep`选项为`false`，
 *   `product`的任意属性发生变化，仍然会触发 watch 的回调函数。
 */
const product1 = reactive({
  price: 25,
  // price: ref(25),
  // price: {now: 25},
  label: "Blue juice"
})

/**
 * 下面的`product`所代理的对象包含嵌套结构，
 *  此时，若设置`watch()`的`deep`选项为`false`，
 *  `product`的二级属性发生变化，将不会触发 watch 的回调函数。
 */
const product = reactive({
  juice: {
    price: 25,
    // price: ref(25),
    // price: reactive(25),
    label: "Blue juice",
  }
})/**/

function updatePrice() {
  if (product.juice.price < 1) return;
  product.juice.price--;
}

watch(
    // product,
    () => product,
    (x, y) => {
      discount.value++;
    },
    {
      // immediate: true,
      // deep: false
      // deep: true
    }
)

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function updateData() {
  for (let i = 0; i < 4; i++) {
    updatePrice()
    await sleep(1000)
    console.log(`price = ${product.juice.price}, discount = ${discount.value}`)
  }
}

updateData()
</script>

<style scoped>
@import "./02.style.scss";
</style>
