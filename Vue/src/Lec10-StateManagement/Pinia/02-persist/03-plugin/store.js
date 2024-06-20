import {defineStore} from 'pinia';
import {ref} from "vue";

export const useCounterStore1 = defineStore(
    'pinia-myCounter',
    {
        state: () => ({
            count: 0
        }),
        actions: {
            increment() {
                this.count++;
            }
        },
        persist: {
            enabled: true,
            strategies: [
                {
                    // key: 'my_counter_store',
                    storage: localStorage,
                    // storage: sessionStorage,
                    paths: ['count'] // 只持久化 count 属性
                }
            ]
        }
    });

export const useCounterStore = defineStore(
    'pinia-myCounter',
    () => {
        const count = ref(0)

        function increment() {
            count.value++;
        }

        return {count, increment}
    },
    {
        persist: {
            enabled: true,
            strategies: [
                {
                    // key: 'my_counter_store',
                    storage: localStorage,
                    // storage: sessionStorage,
                    paths: ['count'] // 只持久化 count 属性
                }
            ]
        }
    });

