<script>
  export let message;
  export let show = false;
</script>

{#if show}
  <div class="notification">
    {message}
  </div>
{/if}

<style>
  .notification {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 1rem;
    background-color: green;
    color: white;
    border-radius: 5px;
  }
</style>