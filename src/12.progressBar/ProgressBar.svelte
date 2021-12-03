<script lang="ts" >
    import {tweened } from "svelte/motion"
    import {cubicOut} from "svelte/easing"

    let duration =10000
    let progress = tweened(0, {
        duration:2000,
        easing:cubicOut,
    })

</script>

    <style>
    .inner,.outer {
        height:40px;
        border-radius: 10px;
    }
    .outer {
        width: 80vw;
        margin: 10 auto;
        background-color: transparent;
        border:1px solid #222;

    }
    .inner {
        width: 10%;
        background-color: tomato;
    }

/* your styles go here */
    </style>

<!-- markup (zero or more items) goes here -->





<button on:click={()=>progress.set(0)}>0%</button>
<button on:click={()=>progress.set(.5)}>50%</button>
<button on:click={()=>progress.set(1,{duration})}>100%</button>



<div class="outer">
    <div class="inner" style="width:{$progress*100}%"></div>
</div>

