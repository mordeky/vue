<template>
  <BaseModal>
    <template v-slot:header>
      <h1> Some header </h1>
    </template>
    <template #default="{bodyVal}">
      Here is the main content of the modal. And some value {{ bodyVal }}.
    </template>

    <template #footer="slotProps">
      <button> {{slotProps.btnText}} </button>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from './2-BaseModal.vue'
</script>