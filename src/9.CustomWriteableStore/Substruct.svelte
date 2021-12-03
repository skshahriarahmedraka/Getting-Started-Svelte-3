<script>
    
    import { countValue } from "./store"

    const Substruct =()=>{
        countValue.subscribe((val)=>{val--})
    }
    
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click="{Substruct}">Substruct</button>