<script>
  export let label;
  export let value;
  export let error;
  export let type = 'text';
</script>

<div class="input">
  <label for="input">{label}</label>
  <input type={type} value={value} />
  
  {#if error}
    <span class="error">{error}</span>
  {/if}
</div>

<style>
  .input {
    width: 100%;
    margin: 10px 0px;
    color:  #3F4363;
    border-bottom: 1px solid  #3F4363;
    transition: 0.3s;
  }
  .input label {
    font-size: 15px;
    color: inherit;
  }
  .input input{
    width: 100%;
    padding: 8px 0px 6px;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 18px;
  }
  .input:hover {
    color: #8F94B8;
    border-bottom: 1px solid #8F94B8;
  }
  .input:focus-within {
    color: white;
    border-bottom: 1px solid white;
  }
  .input:focus-within label {
    color: white;
  }
  .error {
    color: red;
    font-size: 0.8rem;
  }
</style>
