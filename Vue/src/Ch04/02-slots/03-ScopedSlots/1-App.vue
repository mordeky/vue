<template>
  <div>
    <PaginatedList :items="snacks">
      <template #default="{ item_zzz }">
        <h2>{{ item_zzz.id }}</h2>
      </template>

      <template #my-slot="props">
        <h2>{{ props.item2.content }}</h2>
      </template>
    </PaginatedList>
  </div>
</template>

<script setup>
import PaginatedList from './1-PaginatedList.vue'

const snacks = [
  {
    id: 'ready-salted',
    content: 'Ready Salted'
  },
  {
    id: 'cheese-onion',
    content: 'Cheese & Onion'
  },
  {
    id: 'salt-vinegar',
    content: 'Salt & Vinegar'
  },
]
</script>