<script lang="ts">
    import Life from "./life.svelte"
    let visible:boolean=true 
    
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click={()=>visible=!visible}> Show component </button>

{#if visible}
    <Life />
     <!-- content here -->
{/if}