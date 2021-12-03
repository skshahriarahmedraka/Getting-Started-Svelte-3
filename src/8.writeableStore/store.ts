import { writable } from "svelte/store"

export const countValue = writable(10)


// type box = {
//     x: number,
//     y:number ,
// }

// export const countValue2= writable<box[]>([])