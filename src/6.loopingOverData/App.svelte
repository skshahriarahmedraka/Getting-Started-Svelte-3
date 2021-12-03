<script lang=ts>
    // your script goes here
    let dogs:string[] =[]
    let amount:number=5 

    const getDogs=async ()=>{
        const url ="https://dog.ceo/api/breeds/image/random/"+String(amount)
        const datas = await fetch(url)
        const content =await datas.json();

        dogs=content.message;
        console.log(dogs)
        
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<h2>#dog request {amount}</h2>

<input type="range" max=50 min=1 bind:value={amount}>
<br>
<button on:click={getDogs}>Get Dogs</button>
<hr>


{#if dogs.length ==0 }
     <!-- content here -->
     <h1>No dog found </h1>
{:else if  false}
     <!-- else if content here -->
{:else }
    {#each dogs as dog  }
        <img src="{dog}" alt="Dog pic" width="300">        
    {/each}
     <!-- else content here -->
{/if}