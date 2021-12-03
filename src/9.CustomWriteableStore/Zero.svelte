<script>
    
    import { countValue } from "./store"
    const Zero =()=>{
        countValue.set(0)
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click="{Zero}">resetToZero</button>