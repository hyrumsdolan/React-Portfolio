import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

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
      console.log('Form submitted successfully');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <section className="h-screen flex justify-center items-center ">
      <div className="w-full md:w-3/6 w-3/4 p-4 bg-[#2E2E30] rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-center text-[#F3FFDB]">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-[#F3FFDB] font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-[#464648] text-[#F3FFDB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
            />
            {errors.name && <span className="text-[#FF7F50]">{errors.name}</span>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-[#F3FFDB] font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#464648] text-[#F3FFDB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
            />
            {errors.email && <span className="text-[#FF7F50]">{errors.email}</span>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-[#F3FFDB] font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-[#464648] text-[#F3FFDB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
              rows={4}
            />
            {errors.message && <span className="text-[#FF7F50]">{errors.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#FF7F50] text-white font-semibold rounded-lg hover:bg-[#FF6347] transition duration-300 flex justify-center items-center"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;