<script lang="ts">
    // your script goes here
    import { countValue } from "./store"
    
    const Add =()=>{
        console.log("add")
        countValue.subscribe((val)=>val++)
    }
    
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click="{Add}">Add</button>