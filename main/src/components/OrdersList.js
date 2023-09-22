import React from 'react';
import OrderItem from './OrderItem';

const OrdersList = ({ orders }) => {
  return (
    <div className='container cart-itens'>
      <div  className='text-aligns'>
        {orders.map((order, index) => (
          <OrderItem key={index} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrdersList;