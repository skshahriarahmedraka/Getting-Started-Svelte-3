<script lang="ts">

    import Router from "svelte-spa-router"
    import About from "./About.svelte"
    import Book from "./Book.svelte"
    import Home from "./Home.svelte"
    import NotFound from "./NotFound.svelte";
    // your script goes here
    let routes={
        "/":Home ,
        "/about":About ,
        "/book/:id":Book ,
        "*":NotFound,
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<div>
    <Router {routes}/>
</div>