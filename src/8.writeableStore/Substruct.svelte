<script>
    
    import { countValue } from "./store"
    const Substract =()=>{
        countValue.update((val)=> val--)
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (Substract or more items) goes here -->

<button on:click="{Substract}">resetToSubstract</button>