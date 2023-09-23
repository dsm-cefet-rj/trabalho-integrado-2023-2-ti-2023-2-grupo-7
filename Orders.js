import React from 'react';
import OrdersList from '../components/OrdersList';

const Orders = () => {
  const orders = [
    {
      number: '12345',
      date: '2023-08-13',
      status: 'Processando',
      items: [
        { name: 'Camiseta Elegante', quantity: 2, price: 199.99 },
        { name: 'Sapatos Clássicos', quantity: 1, price: 399.99 },
      ],
      total: 799.97,
    },
    {
      number: '12346',
      date: '2023-08-14',
      status: 'Enviado',
      items: [{ name: 'Vestido de Luxo', quantity: 1, price: 599.99 }],
      total: 599.99,
    },
    {
      number: '12346',
      date: '2023-08-14',
      status: 'Enviado',
      items: [{ name: 'Vestido de Luxo', quantity: 1, price: 599.99 }],
      total: 599.99,
    },
    
  ];

  return (
<div className="page-container custom-center3">
  <div className='text-aligns'>
    <h1>Seus Pedidos</h1>
    <div>
      <OrdersList orders={orders} />
    </div>
  </div>
</div>

  
  );
}

export default Orders;