import React, { useState, useEffect } from 'react';
import OrdersList from '../components/OrdersList';
import api from '../api/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {console.log(orders)
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      const response = await api.get('/orders');
      if (response.status === 200) {
        setOrders(response.data);
      }
    } catch (error) {
      console.error('Erro ao obter itens do pedido:', error);
    }
  };

  const handleRemove = async (order) => {
    try {
      const confirmed = window.confirm('Tem certeza que deseja remover este item do carrinho?');
  
      if (confirmed) {
        const response = await api.delete(`/orders/${order._id}`);
        if (response.status < 300) {
          fetchOrderData();
          alert('Item removido do carrinho com sucesso');
        }
      } else {
        alert('Remoção cancelada');
      }
    } catch (error) {
      console.error('Error removing item from the cart:', error);
    }
  };
  

  const updateOrderStatus = async (order,selectedStatus) => {console.log(order)
    try {
      order.status=selectedStatus
      const response = await api.put(`/orders/${order._id}`,order);
      if (response.status < 300) {
        fetchOrderData();
      }
    }
    catch (error) {
      console.error('Error updating item from the cart:', error);
    }
  };



  return (
    <div className="page-container custom-center3">
      <div className='text-aligns'>
        <h1>Seus Pedidos</h1>
        <div>
          <OrdersList orders={orders} removeOrder={handleRemove} updateOrderStatus={updateOrderStatus} />
        </div>
      </div>
    </div>
  );
}

export default Orders;
