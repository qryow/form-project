<script>
  export let message = '';
  export let show = false;

  function closeNotification() {
    show = false;
  }

  let timer;
  $: {
    if (show) {
      clearTimeout(timer);
      timer = setTimeout(closeNotification, 4000);
    }
  }
</script>

{#if show}
  <div class="notification" on:click={closeNotification}>
    <p>{message}</p>
    <button class="close-btn" on:click={closeNotification}>×</button>
  </div>
{/if}

<style>
  .notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 270px;
    cursor: pointer;
    opacity: 0;
    animation: fadeInSlideDown 0.5s forwards;
  }

  .notification p {
    margin: 0;
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  .close-btn:hover {
    opacity: 0.8;
  }

  @keyframes fadeInSlideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
</style>
