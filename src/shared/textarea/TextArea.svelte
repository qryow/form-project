<script>
  export let label;
  export let value;
  export let error;
</script>

<div class="input {error ? value ? "" : 'error-state' : ''}">
  <label>{label}</label>
  <textarea bind:value={value} placeholder={error ? error : ''} ></textarea>
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
  .input textarea{
    width: 100%;
    padding: 10px 0px 6px;
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
  .input textarea::placeholder {
    font-size: 14px;
    color: red;
  }
</style>
