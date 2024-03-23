import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name) {
      validationErrors.name = 'Name is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!message) {
      validationErrors.message = 'Message is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Send form data to server or perform desired action
      console.log('Form submitted successfully');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;