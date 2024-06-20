import { defineStore } from 'pinia'
import {ref} from "vue";

export const useCounterStore = defineStore(
    'myStore',
    () => {
        const count = ref(0)
        function increment() {
            count.value++
            saveToLocalStorage()
        }

        // 保存状态到localStorage
        function saveToLocalStorage() {
            localStorage.setItem('pinia-myStore',
                // JSON.stringify(this.$state)
                JSON.stringify({count: count.value})
            )
        }

        // 从localStorage恢复状态
        function restoreFromLocalStorage() {
            const persistedState = localStorage.getItem('pinia-myStore')
            if (persistedState) {
                console.log('restore!!!!')
                // this.$state = JSON.parse(persistedState)
                count.value = JSON.parse(persistedState).count
            }
        }

        restoreFromLocalStorage()
        return {count, increment}
    }
)
