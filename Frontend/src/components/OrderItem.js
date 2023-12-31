import React, { useState } from 'react';
import api from '../api/api';
import { useEffect } from 'react';

const OrderItem = ({ order, removeOrder, updateOrderStatus }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      api
        .get('http://localhost:3001/protected', {
          headers: {
            Authorization: token,
          },
        })
        .then(response => {
          const userRole = response.data.user.role;
          setIsLoggedIn(true);
          setIsAdmin(userRole === 'admin');
        })
        .catch(error => {
          setIsLoggedIn(false);
          setIsAdmin(false);
          console.error('Erro ao verificar autenticação:', error);
        });
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);


  const [selectedStatus, setSelectedStatus] = useState(order.status);

  const handleStatusChange = () => {
    updateOrderStatus(order, selectedStatus);
  };

  const handleDropdownChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="order">
      <div className='order-title'>
        <h2>Pedido #{order.number}</h2>
      </div>
      <hr></hr>

      <div className='order-main-content'>
      <p><strong>Data:</strong> {order.date}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <ul className="order-items">
        {order.items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - Quantidade: {item.quantity} - R$ {item.price} cada
          </li>
        ))}
      </ul>
      </div>

      <hr />
      <div className='order-total'>
        <p><strong>Total do Pedido:</strong> R$ {order.total}</p>

        {isLoggedIn && isAdmin && (
          <>
        <button onClick={() => removeOrder(order)}
        style={{
          display: "inline-block",
          backgroundColor: "#ff9900",
          color: "#fff",
          borderRadius: "1%",
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

        <div className="status-dropdown">
          <select onChange={handleDropdownChange} value={selectedStatus}>
            <option value="Processando">Processando</option>
            <option value="Enviado">Enviado</option>
            <option value="Entregue">Entregue</option>
            <option value="Cancelado">Cancelado</option>
          </select>
          <button onClick={handleStatusChange}
          style={{
            display: "inline-block",
            backgroundColor: "#ff9900",
            color: "#fff",
            borderRadius: "1%",
            textDecoration: "none",
            transition: "background-color 0.3s",
            margin: "0.5%"
          }}
          variant="primary"
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#b36b00";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ff9900"; 
          }}>Alterar Status</button>
        </div>    
        </>
        )}
      </div>
    </div>
  );
}

export default OrderItem;
