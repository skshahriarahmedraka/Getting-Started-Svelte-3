<script lang="ts">
    // your script goes here
    
    let Fname="sk",Lname="raka",FullName

    $: FullName=Fname+" "+Lname 

    $: if (FullName.length >10) {
        alert("Name is too big")
    }

</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<div>
    <h1>first Name : {Fname}</h1>
    <h1>Last Name : {Lname}</h1>
    <br>
    <h1>full Name : {FullName }</h1>
</div>
<p>demo</p>
<input type="text" placeholder="{Fname} {Lname}" >
<input type="text" placeholder="{Fname}" bind:value={Fname}>
<input type="text" placeholder="{Lname}" bind:value={Lname}>
