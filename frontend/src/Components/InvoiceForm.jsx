import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    alternatePayee1: '',
    alternatePayee2: '',
    city: '',
    street: '',
    country: '',
    bankKey: '',
    bankAccNo: '',
    reference: '',
    lineItems: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://nimbles2p-assignment.onrender.com/invoices/save-draft', formData);
      console.log('Invoice saved:', response.data);
    } catch (error) {
      console.error('Error saving invoice:', error);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ color: 'purple', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>ALTERNATE PAYEE DETAILS</h2>
      <label className="form-group">
       AlternatePayee1 :
        <input type="text" name="alternatePayee1" value={formData.alternatePayee1} onChange={handleChange} />
      </label>
      <label className="form-group">
      AlternatePayee2 :
        <input type="text" name="alternatePayee2" value={formData.alternatePayee2} onChange={handleChange} />
      </label>
      <label className="form-group">
        City :
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <label className="form-group">
        Street :
        <input type="text" name="street" value={formData.street} onChange={handleChange} />
      </label>
      <label className="form-group">
        Country :
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>
      <label className="form-group">
        Bank Key :
        <input type="text" name="bankKey" value={formData.bankKey} onChange={handleChange} />
      </label>
      <label className="form-group">
        Bank Account No :
        <input type="text" name="bankAccNo" value={formData.bankAccNo} onChange={handleChange} />
      </label>
      <label className="form-group">
        Reference :
        <input type="text" name="reference" value={formData.reference} onChange={handleChange} />
      </label>
      <button type="submit">Save to draft</button>
    </form>
  );
};

export default InvoiceForm;
