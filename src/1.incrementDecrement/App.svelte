<script lang="ts">
	// your script goes here
	let c:number=0
	let clicked:boolean=false
	const increment=()=>{c++}
	const decrease=()=>{c--}
	const reset=()=>{c=0}
</script>

<style>
	/* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<div>
	<h1>count: {c} </h1>	
	<button on:click={increment}>++</button>
	<button on:click={decrease}>--</button>
	<button on:click={reset}>reset</button>

</div>

