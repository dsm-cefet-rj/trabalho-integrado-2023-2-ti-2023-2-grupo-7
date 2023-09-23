import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <div className="order">
      <h2>Pedido #{order.number}</h2>
      <p><strong>Data:</strong> {order.date}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <ul className="order-items">
        {order.items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - Quantidade: {item.quantity} - R$ {item.price} cada
          </li>
        ))}
      </ul>
      <hr />
      <div className='order-total'>
      <p><strong>Total do Pedido:</strong> R$ {order.total}</p>
      </div>
    </div>
  );
}

export default OrderItem;
