import api from '../api/api';

export const adicionarPedido = (pedido) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/orders', pedido);

      if (response.status === 201) {
        const novoPedido = response.data;
        dispatch({
          type: 'ADICIONAR_PEDIDO',
          payload: novoPedido,
        });
      } else {
        const errorData = response.data;
        console.error('Erro ao adicionar pedido:', errorData);
      }
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
    }
  };
};

export const removerPedido = (pedidoId) => {
  return async (dispatch) => {
    try {
      const response = await api.delete(`/orders/${pedidoId}`);

      if (response.status === 200) {
        dispatch({
          type: 'REMOVER_PEDIDO',
          payload: pedidoId,
        });
      } else {
        const errorData = response.data;
        console.error('Erro ao remover pedido:', errorData);
      }
    } catch (error) {
      console.error('Erro ao remover pedido:', error);
    }
  };
};

export const atualizarStatusPedido = (pedidoId, novoStatus) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`/orders/${pedidoId}`, { newStatus: novoStatus });

      if (response.status === 200) {
        const pedidoAtualizado = response.data;
        dispatch({
          type: 'ATUALIZAR_STATUS_PEDIDO',
          payload: { pedidoId, newStatus: pedidoAtualizado.status },
        });
      } else {
        const errorData = response.data;
        console.error('Erro ao atualizar o status do pedido:', errorData);
      }
    } catch (error) {
      console.error('Erro ao atualizar o status do pedido:', error);
    }
  };
};
