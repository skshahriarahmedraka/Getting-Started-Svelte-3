<script lang="ts">
import { each } from "svelte/internal";


    // your script goes here
    const langs:string[]=["golang","c","typescript","rust","python"]
    let fav:string[]=[]
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


{#each langs as lang}
    <label for="">
        <input type="checkbox" value={lang} bind:group="{fav}">
        {lang}
    </label>
     <!-- content here -->
{/each}


<h1>selected : </h1>
<h3>{fav}</h3>
<!-- // -->

{#each langs as lang}
    <label for="">
        <input type="radio" value={lang} bind:group="{fav}">
        {lang}
    </label>
     <!-- content here -->
{/each}


<h1>selected : </h1>
<h3>{fav}</h3>