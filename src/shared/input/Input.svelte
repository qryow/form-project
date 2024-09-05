<script>
  export let label;
  export let value;
  export let error;
  export let type = 'text';
</script>

<div class="input {error ? 'error-state' : ''}">
  <label for="input" class={error ? 'error-label' : ''}>{label}</label>
  <input 
    type={type} 
    value={error ? "" : value} 
    placeholder={error ? error : ''} 
    on:input={(e) => value = e.target.value} 
  />
</div>

<style>
  .input {
    width: 100%;
    margin: 10px 0;
    color: #3F4363;
    border-bottom: 1px solid #3F4363;
    transition: 0.3s;
  }

  .input label {
    font-size: 15px;
    color: inherit;
  }

  .input input {
    width: 100%;
    padding: 8px 0 6px;
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

  .input:focus-within .error-label {
    color: white;
  }
  
  .input input::placeholder {
    font-size: 14px;
    color: red;
  }
</style>
