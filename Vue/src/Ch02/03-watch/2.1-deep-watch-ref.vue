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
import {ref, watch} from "vue";

const discount = ref(0) // 注意，它与watch options中的immediate的关系！

const product = ref({
  juice: {
    price: 25,
    label: "Blue juice",
  }
})

function updatePrice() {
  if (product.value.juice.price < 1) return;
  // if('__v_isRef' in product)
  product.value.juice.price--;
}

watch(
    // product,
    // 直接对 product 进行监听，将无法响应其“数据事件”，这是因为：
    //   (1) product 是`const`的，它本身不会发生变化；
    //   (2）product 是 unwrapped 的，也不会直接对其 .value 进行监控

    product.value,
    // 通过这种方式，可以实现“深度watch”，即：不必显式设置`deep: true`
    // 然而，如果显式设置`deep: false`，将不再是“深度watch”。
    // 这一方式，与对`reactive object`的监听效果是一样的。

    // () => product.value,
    // 有趣的是，尽管这种`getter()`方法看起来等同于直接对`product.value`进行监听，
    // 然而，如果不显式设置`deep: true`，这种`getter()`方法也不会进行“深度watch”。
    // 这一方式，与对`reactive object`的监听效果是一样的。

    // product.value.juice, // 直接对product的子对象进行监听，就不必管是否设置了`deep: true`

    // product.value.juice.price, // wrong!
    (x, y) => {
      console.log('cb is called!')
      discount.value++;
    },
    {
      // immediate: true,
      // deep: false
      deep: true
    }
)

const sleep = (delay) => new Promise(
    (resolve) => setTimeout(resolve, delay))
async function updateData() {
  for (let i = 0; i < 4; i++) {
    updatePrice()
    await sleep(1000)
    console.log(`price = ${product.value.juice.price}, discount = ${discount.value}`)
  }
}

updateData()

// console.log(product.juice.price)
// console.log(discount.value)

</script>

<style scoped>
@import "./2.style.scss";
</style>
