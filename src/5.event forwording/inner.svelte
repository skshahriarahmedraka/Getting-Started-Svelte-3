<script lang="ts">
    // your script goes here
    import { createEventDispatcher} from "svelte"
    const dispatch= createEventDispatcher()
    const incrimentCount=()=>{
        console.log("inner incrementEvent !!! ")
        dispatch("increment")
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click={incrimentCount}>increment count</button>