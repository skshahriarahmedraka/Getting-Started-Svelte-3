import { writable } from "svelte/store"

const createStore = () => {
    const { set, update, subscribe } = writable(0)
    return {
        subscribe, 
        add: () => update(val => val += 1),
        subtract: () => update(val => val -= 1),
        reset: ()=> set(0)
    }
}

export const count=createStore()