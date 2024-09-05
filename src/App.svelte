<script>
  import Input from './shared/input/Input.svelte';
  import TextArea from './shared/textarea/TextArea.svelte';
  import Checkbox from './shared/checkbox/Checkbox.svelte';
  import Button from './shared/button/Button.svelte';
  import Notification from './shared/notitfication/Notification.svelte'; // Исправил имя

  import { writable, get } from 'svelte/store';

  let errors = {};
  let showNotification = false;

  export const form = writable({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptPolicy: false,
  });

  function validateForm() {
    const formValues = get(form);
    errors = {};

    if (!formValues.name) errors.name = 'Name is required';
    if (!formValues.company) errors.company = 'Company is required';
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) errors.email = 'Valid email is required';
    if (!formValues.phone || !/^\d+$/.test(formValues.phone)) errors.phone = 'Valid phone number is required';
    if (!formValues.subject) errors.subject = 'Subject is required';
    if (!formValues.message) errors.message = 'Message is required';
    if (!formValues.acceptPolicy) errors.acceptPolicy = 'You must accept the terms and policy';

    return Object.keys(errors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      showNotification = true;
      form.set({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        acceptPolicy: false,
      });
      setTimeout(() => {
        showNotification = false;
      }, 4000);
    }
  }

  function closeNotification() {
    showNotification = false;
  }
</script>

<main class="wrapper">
  <img src="/src/assets/bg.png" alt="background" loading="lazy">
  <h1>Hello</h1>
  <form class="form" on:submit={handleSubmit}>
    <h4>For business enquiries please <br> use the form below</h4>
    <p>*Required</p>
    <Input label="Name*" bind:value={$form.name} error={errors.name} type="text" />
    <Input label="Company*" bind:value={$form.company} error={errors.company} type="text" />
    <Input label="E-mail*" bind:value={$form.email} error={errors.email} type="email" />
    <Input label="Phone*" bind:value={$form.phone} error={errors.phone} type="tel" />
    <Input label="Subject*" bind:value={$form.subject} error={errors.subject} type="text" />
    <TextArea label="Message*" bind:value={$form.message} error={errors.message} />
    <Checkbox label="I accept Terms and Privacy Policy" bind:checked={$form.acceptPolicy} error={errors.acceptPolicy} />
    <Button label="Send" color="#2C2F47" />
  </form>

  {#if showNotification}
    <Notification message="Form submitted successfully!" show={showNotification} on:click={closeNotification} />
  {/if}
</main>

