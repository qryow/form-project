export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name) errors["name"] = "Name is required";
  if (!formData.company) errors["company"] = "Company is required";
  if (!formData.email.includes("@")) errors["email"] = "Invalid email";
  if (!formData.message) errors["message"] = "Message is required";
  if (!formData.acceptPolicy)
    errors["acceptPolicy"] = "You must accept the terms";

  return errors;
};
