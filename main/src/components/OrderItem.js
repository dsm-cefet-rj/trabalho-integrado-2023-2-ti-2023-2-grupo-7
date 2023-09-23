import React from 'react';

const OrderItem = ({ order, removeOrder }) => {
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
      <div>
        <button onClick={() => removeOrder(order.number)}
        style={{
          display: "inline-block",
          backgroundColor: "#ff9900",
          color: "#fff",
          borderRadius: "50%",
          textDecoration: "none",
          transition: "background-color 0.3s",
        }}
        variant="primary"
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#b36b00";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#ff9900"; 
        }}>Cancelar Pedido</button>
      </div>
    </div>
  );
}

export default OrderItem;
