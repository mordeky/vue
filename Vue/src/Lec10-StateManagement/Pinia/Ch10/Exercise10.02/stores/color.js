import {defineStore} from 'pinia'

function toHex(color) {
    return Number(color).toString(16).padStart(2, '0')
}

export const useColorStore = defineStore({
    id: 'color',
    state: () => ({
        red: 0,
        blue: 0,
        green: 0
    }),
    getters: {
        hex: (state) => {
            // return "#" + toHex(state.red) + toHex(state.green) + toHex(state.blue);
            return `#${toHex(state.red)}${toHex(state.green)}${toHex(state.blue)}`
        }
    }
})
