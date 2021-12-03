<script lang="ts">
    
    // your script goes here

import A1 from "../1.incrementDecrement/App.svelte";
import Snd from "./Snd.svelte";

let count =12
let box ={
    x:40 ,
    z:32,
}

</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<Snd {count} {box} {...box}></Snd>