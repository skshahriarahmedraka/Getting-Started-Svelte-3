<script lang="ts">
    import Zero from "./Zero.svelte"
    import Substruct from "./Substruct.svelte"
    import Add from "./Add.svelte"
    import { count } from "./store"
    //let count=0 ;

    //count.subscribe((PreviousValue)=>{count=PreviousValue})
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<div>
    <h1>{$count}</h1>

    <Zero/>
    <Add/>
    <Substruct/>
</div>