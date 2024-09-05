<script>
  export let label;
  export let checked = false; 
  export let error = null;

  function handleChange(event) {
    checked = event.target.checked;
  }
</script>

<div class="checkbox-group">
  <input type="checkbox" checked={checked} on:change={handleChange} />
  <label>I accept <a href="#">Terms and Privacy Policy</a></label>
  {#if error}
    <span class="error">{error}</span>
  {/if}
</div>

<style>
  .checkbox-group {
    position: relative;
    width: 95%;
    margin: 15px 0px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .checkbox-group input[type="checkbox"] {
    appearance: none;
    width: 25px;
    height: 25px;
    border: 2px solid #3F4363;
    border-radius: 4px;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .checkbox-group input[type="checkbox"]:hover {
    border: 2px solid #8f94b8c7;
  }
  .checkbox-group input[type="checkbox"]::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: all 0.3s ease;
  }
  .checkbox-group input[type="checkbox"]:checked::before {
    content: url('/src/assets/checked.svg');
  }
  .checkbox-group input[type="checkbox"]:checked {
    background-color: #2C2F47;
    border-color: #6f6fc9;
  }
  .checkbox-group label {
    color: #797EA3;
    font-size: 14px;
    cursor: pointer;
  }
  .checkbox-group label a {
    color: #B9BEE5;
  }
  .error {
    position: absolute;
    left: 0;
    bottom: -24px;
    color: red;
    font-size: 14px;
  }
</style>