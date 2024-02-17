import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // State for tracking submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors = { ...newErrors, name: 'Name is required' };
    }
    if (!formData.email.trim()) {
      newErrors = { ...newErrors, email: 'Email is required' };
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors = { ...newErrors, email: 'Invalid email address' };
    }
    if (!formData.message.trim()) {
      newErrors = { ...newErrors, message: 'Message is required' };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true); // Update state to indicate successful submission
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      {!submitted ? ( // Show form if not submitted
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">Submit</button>
        </form>
      ) : ( // Show confirmation message if submitted
        <div className="text-green-600 font-semibold">Successfully submitted!</div>
      )}
    </div>
  );
};

export default ContactForm;