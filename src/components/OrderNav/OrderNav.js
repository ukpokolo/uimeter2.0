import React, { useState } from 'react';
import './OrderNav.css'



const OrderNav = () => {
  const [activeTab, setActiveTab] = useState('Order Electricity');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav>
      <ul className="OrderNav">
        <li
          className={activeTab === 'Order Electricity' ? 'active' : ''}
          onClick={() => handleTabClick('Order Electricity')}
        >
            <span className="tab-number">1</span>
          <span className="tab-text">Order Electricity</span>
          
        </li>
        <li
          className={activeTab === 'Review Order' ? 'active' : ''}
          onClick={() => handleTabClick('Review Order')}
        >
             <span className="tab-number">2</span>
          <span className="tab-text">Review Order</span>
         
        </li>
        <li
          className={activeTab === 'Payment Information' ? 'active' : ''}
          onClick={() => handleTabClick('Payment Information')}
        >
            <span className="tab-number">3</span>
          <span className="tab-text">Payment Information</span>
          
        </li>
        <li
          className={activeTab === 'Complete Order' ? 'active' : ''}
          onClick={() => handleTabClick('Complete Order')}
        >
            <span className="tab-number">4</span>
          <span className="tab-text">Complete Order</span>
          
        </li>
      </ul>
    </nav>
  );
};

export default OrderNav;
