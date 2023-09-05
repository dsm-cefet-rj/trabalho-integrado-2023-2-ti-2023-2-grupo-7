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
  ];

  return (
    <div>
      <section className="main-content-orders">
        <h1>Seus Pedidos</h1>
        <OrdersList orders={orders} />
      </section>
    </div>
  );
}

export default Orders;