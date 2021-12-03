<script lang="ts">

    import Login from "./login.svelte"
    import Dashboard from "./dashboard.svelte";
    import {fade ,fly,scale ,slide} from "svelte/transition"
import A1 from "../1.incrementDecrement/App.svelte";
import A2 from "../2.reactivity/App.svelte";

    let user ={
        name:"sk shahriar ahmed raka",
        username: "SSAR",
        loggedin: true ,
    }
</script>

<style>
    /* your styles go here */
    *{
        margin: auto;
    }
</style>

<!-- markup (zero or more items) goes here -->


{#if user.loggedin}
    <div in:fade >

        <Dashboard on:logout={()=> user.loggedin=false} {...user}></Dashboard>
    </div>

{:else}
    <button transition:fade on:click={()=>{user.loggedin=true}}>login</button>
    <button in:fade on:click={()=>{user.loggedin=true}}>login</button>
    <button in:fade={{duration:2000}} on:click={()=>{user.loggedin=true}}>login</button>
    <button in:fly={{duration:2000}} on:click={()=>{user.loggedin=true}}>login</button>
    <button in:fly={{x:1000,duration:2000}} on:click={()=>{user.loggedin=true}}>login</button>
    <button in:fly={{x:1000,duration:2000}} on:click={()=>{user.loggedin=true}}>login</button>
    <button in:fly={{y:-1000,duration:2000}} on:click={()=>{user.loggedin=true}}>login</button>
{/if}