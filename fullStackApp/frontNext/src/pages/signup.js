"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import style from '../styles/Signup.module.scss';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => { 
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement form submission logic here
    // This could involve sending data to a backend API or storing it locally
    // for demonstration purposes, we'll just log the data
    console.log('Signup form submitted:', formData); 

    // Reset the form after submission
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className={style.signupContainer}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;