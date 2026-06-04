import { useState } from 'react';

export function useContactForm(fields = ['name', 'email', 'subject', 'message']) {
  const initial = {};
  fields.forEach((f) => (initial[f] = ''));

  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const reset = () => {
    setFormData(initial);
    setErrors({});
    setSuccess(false);
  };

  const validate = () => {
    const newErrors = {};
    if ('name' in formData && !formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    if ('email' in formData) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please provide a valid email';
      }
    }
    if ('message' in formData && !formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSuccess(true);
    setFormData(initial);
  };

  return {
    formData,
    setFormData,
    errors,
    success,
    setSuccess,
    reset,
    handleSubmit,
  };
}
