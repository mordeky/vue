import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
    'myStore', {
    state: () => {
        // restoreFromLocalStorage()
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
            this.saveToLocalStorage()
        },
        // 其他actions...

        // 保存状态到localStorage
        saveToLocalStorage() {
            localStorage.setItem('pinia-myStore', JSON.stringify(this.$state))
        },

        // 从localStorage恢复状态
        restoreFromLocalStorage() {
            const savedState = localStorage.getItem('pinia-myStore')
            if (savedState) {
                console.log('restore!!!!')
                this.$state = JSON.parse(savedState)
            }
        },
    },
    // 在store创建时自动恢复状态
    setup() {
        // const { restoreFromLocalStorage } = this
        console.log('hihi')
        // restoreFromLocalStorage()

        // 返回其他setup逻辑（如果有）
        return {}
    },
})

// 使用生命周期钩子在 store 初始化时调用 initializeStore 方法
export const useInitializeStore = () => {
    const store = useCounterStore();
    if (!store.$state._isInitialized) {
        store.$state._isInitialized = true;
        store.restoreFromLocalStorage();
    }
};

// useInitializeStore()
