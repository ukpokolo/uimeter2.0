import React, { useState } from 'react';
import './OrderElectricity.css'

const OrderElectricity = () => {
  const [meterNumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the values of meterNumber and amount
    // from the respective state variables
  };

  return (
    <div className="oe-form-container">
      <form className="oe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter meter number"
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default OrderElectricity;
