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

<script setup>
import { ref } from "vue"
const totalItems = ref(0)
const totalCost = ref(0)

const addToCart = (n) => {
    totalItems.value += 1
    totalCost.value += n
}

const formatCurrency = (val) => {
    return `$${val.toFixed(2)}`
}
</script>

<style scoped>
@import './styles.scss';
</style>
