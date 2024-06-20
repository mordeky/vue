import {defineStore} from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore(
    'data',
    {
        state: () => ({items: null}),
        getters: {  // 注意是复数的`getters`，而非`getter`
            // location(state){
            city: (state) => { // 注意，必须设置参数`state`; 必须用类似于对象的定义语法
                return state.items.results[0].location.city
            }
        },
        actions: {
            async fetchData() {
                const response = await axios.get('https://randomuser.me/api/')
                this.items = response.data
            }
        }
    })