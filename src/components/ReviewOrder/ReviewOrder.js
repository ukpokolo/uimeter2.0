import React from 'react';
import './ReviewOrder.css'

const ReviewOrder = ( ) => {
  // const { name, address, meterNumber, amount, unit } = formData;
  const rate = 74.3; // Assuming the rate is a fixed value

  return (
    <div className="results-container">
      <div className="receipt">
        <h2>Receipt</h2>
        <div className="receipt-item">
          <span className="item-label">Name:</span>
          <span>name</span>
        </div>
        <div className="receipt-item">
          <span className="item-label">Address:</span>
          <span>address</span>
        </div>
        <div className="receipt-item">
          <span className="item-label">Rate:</span>
          <span>rate</span>
        </div>
        <div className="receipt-item">
          <span className="item-label">Meter Number:</span>
          <span>meterNumber</span>
        </div>
        <div className="receipt-item">
          <span className="item-label">Amount:</span>
          <span>amount</span>
        </div>
        <div className="receipt-item">
          <span className="item-label">Unit:</span>
          <span>unit</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
