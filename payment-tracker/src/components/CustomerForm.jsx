// src/components/CustomerForm.js
import React, { useState } from 'react';
import { createCustomer } from '../services/CustomerService';

function CustomerForm() {
  const [customerData, setCustomerData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomer(customerData);
      alert('Customer added successfully');
      setCustomerData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Failed to add customer', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={customerData.name} onChange={handleChange} placeholder="Customer Name" />
      <input name="email" value={customerData.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={customerData.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Add Customer</button>
    </form>
  );
}

export default CustomerForm;
