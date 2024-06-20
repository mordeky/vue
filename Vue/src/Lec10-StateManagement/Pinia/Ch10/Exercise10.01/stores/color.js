import {defineStore} from 'pinia'

export const useColorStore = defineStore({
    id: 'color',
    /* defineStore的第一个参数为id，
       如果将'color'放在`{...}`的外部，作为第一个参数，则自动为id
     */
    state: () => ({
        red: 0,
        blue: 0,
        green: 0
    })
})
