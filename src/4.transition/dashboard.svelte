<script lang="ts">
    // your script goes here
    import  {createEventDispatcher} from "svelte"

    const  dispatch=createEventDispatcher();

    export let name 
    export let username 
    export let loggedin =true 

    const logout =()=>{

        dispatch("logout",{
            timestamp:Date.now(),
        })
    }




</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<h1>Welcome back !!! {name}</h1>
<h2>username : {username}</h2>
<h3> loged state : {loggedin}</h3>

<button on:click={logout}>logout</button>



