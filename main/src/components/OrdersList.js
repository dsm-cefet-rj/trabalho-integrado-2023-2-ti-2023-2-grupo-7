import React from 'react';
import OrderItem from './OrderItem';

const OrdersList = ({ orders, removeOrder, updateOrderStatus }) => {
  return (
    <div className='container cart-itens'>
      <div className='text-aligns'>
        {orders.map((order, index) => (
          <OrderItem key={index} order={order} removeOrder={removeOrder} updateOrderStatus={updateOrderStatus} />
        ))}
      </div>
    </div>
  );
}

export default OrdersList;
