<!-- <script lang="ts">
    // your script goes here
    import  {createEventDispatcher} from "svelte"
    import Inner from "./inner.svelte"
    const dispatch=createEventDispatcher()
    const forwordEvent=(e)=>{
        console.log("middle increment")
        console.log("e.type : ",e.type)
        console.log("e.detail : ",e.detail)
        dispatch(e.type,e.detail)
    }
</script>

<style>
    /* your styles go here */
</style>



<Inner on:increment={forwordEvent} ></Inner> -->



<script lang="ts">
    // // your script goes here
    // import  {createEventDispatcher} from "svelte"
    import Inner from "./inner.svelte"
    // const dispatch=createEventDispatcher()
    // const forwordEvent=(e)=>{
    //     console.log("middle increment")
    //     console.log("e.type : ",e.type)
    //     console.log("e.detail : ",e.detail)
    //     dispatch(e.type,e.detail)
    // }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<Inner on:increment ></Inner>