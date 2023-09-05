import React from 'react';
import OrderItem from './OrderItem';

const OrdersList = ({ orders }) => {
  return (
    <div className="order-list">
      {orders.map((order, index) => (
        <OrderItem key={index} order={order} />
      ))}
    </div>
  );
}

export default OrdersList;