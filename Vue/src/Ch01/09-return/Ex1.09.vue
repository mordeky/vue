<template>
  <div>
    <h1>Returning Methods</h1>

    <div>Cart({{ totalItems }}) {{ formatCurrency(totalCost) }}</div>

    <ul>
      <li v-for="n in 5" :key="n">
        <button @click="addToCart(n)">Add {{ formatCurrency(n) }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems: 0,
      totalCost: 0,
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems += 1
      this.totalCost += n
    },
    formatCurrency(val) {
      return `$${val.toFixed(2)}`
    },
  },
}
</script>

<style scoped>
/* */
@import './styles.scss';
</style>
