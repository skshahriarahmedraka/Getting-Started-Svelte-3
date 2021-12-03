<script lang="ts">
import Middle from "./middle.svelte";

    // your script goes here
    let count=0 
    const onclick=(e)=>{
        console.log("count increment ")
        count++;
    }
    
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<h1>{count}</h1>
<Middle on:increment={onclick}></Middle>