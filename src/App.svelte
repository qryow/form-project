<script>
  import Input from './shared/input/Input.svelte';
  import TextArea from './shared/textarea/TextArea.svelte';
  import Checkbox from './shared/checkbox/Checkbox.svelte';
  import Button from './shared/button/Button.svelte';
  import Notification from './shared/notitfication/Notification.svelte';

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
</script>

<main class="wrapper">
  <h1>Hello</h1>
  <form class="form">
    <h4>For business enquiries please <br> use the form below</h4>
    <p>*Required</p>
    <Input label="Name*" bind:value={$form.name} error={errors.name} type="text" />
    <Input label="Company*" bind:value={$form.company} error={errors.company} type="text" />
    <Input label="E-mail*" bind:value={$form.email} error={errors.email} type="email" />
    <Input label="Phone*" bind:value={$form.phone} error={null} type="tel" />
    <Input label="Subject*" bind:value={$form.subject} error={null} type="text" />
    <TextArea label="Message*" bind:value={$form.message} error={errors.message} />


    <Checkbox label="I accept Terms and Privacy Policy" value={$form.acceptPolicy} error={errors.acceptPolicy || null} />

    <Button label="Send" color="#2C2F47" />
  </form>

  <Notification message="Form submitted successfully!" show={showNotification} />
</main>