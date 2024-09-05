<script>
  export let label;
  export let color;
</script>

<button class="form_btn" style="background-color: {color}">
  {label}
</button>

<style>
  .form_btn {
    padding: 10px 40px;
    margin: 20px auto 0px;
    font-size: 18px;
    border-radius: 50px;
    border: none;
    outline: none;
  }
  .form_btn:hover {
    background-color: #404463;
    cursor: pointer;
  }
</style>