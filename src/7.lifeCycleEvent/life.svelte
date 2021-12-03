<script lang="ts">
    import {onMount ,onDestroy} from "svelte";
    let time =0 
    let intervel 


    onMount(()=>{
        intervel= setInterval(()=>{
            time++
            console.log("time++")
        },2000)
        console.log("interval")
    })
    onDestroy(()=>{
        clearInterval(intervel)
        console.log(" interval distroyed")
    })
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<h1>component goes Here</h1>
<h2>i alive for {time} seconds</h2>