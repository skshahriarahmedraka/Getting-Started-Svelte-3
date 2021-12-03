<script lang="ts">
    import {push,pop,replace} from "svelte-spa-router"
    
    export let BookId={}
    console.log(BookId)
    
    let goBack=()=>{
        pop()
    }
    let goHome=()=>{
        push("/")
    }
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<h1>Books</h1>

<h2>ID : {BookId}</h2>

<button on:click={goBack}>Go Back</button>
<button on:click={goHome}>Go Home</button>