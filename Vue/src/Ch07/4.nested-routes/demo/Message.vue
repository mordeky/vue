<template>
    <div>
        <p>Message content: {{message_xx.content}}</p>
        <RouterLink :to="{ name: 'messageAuthor' }">Author</RouterLink> |
        <RouterLink :to="{ name: 'messageInfo' }">Info</RouterLink>
        <RouterView/>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
/*const { message } = */
defineProps({
    message_xx: {
        default: () => ({ content: '' }),
        type: Object
    },
    // id: {
    //     default: '',
    //     type: String
    // }
})

</script>
