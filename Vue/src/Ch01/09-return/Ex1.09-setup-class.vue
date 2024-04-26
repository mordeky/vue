<template>
  <div>
    <h1>Returning Methods</h1>

    <div>Cart({{ x.totalItems }}) {{ formatCurrency(x.totalCost.value) }}</div>

    <ul>
      <li v-for="n in 5" :key="n">
        <button @click="x.addToCart(n)">Add {{ formatCurrency(n) }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

class X {
  totalItems = ref(0)
  totalCost = ref(0)

  addToCart (n) {
    this.totalItems.value++
    this.totalCost.value += n
  }
}
const formatCurrency = (val) => {
  return `$${val.toFixed(2)}`
}

const x = new X()
</script>


<style scoped>
@import './styles.scss';
</style>
