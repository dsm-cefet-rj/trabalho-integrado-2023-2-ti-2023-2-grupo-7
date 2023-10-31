import api from '../api/api';
export const adicionarItemAoCarrinho = (item) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/cart', item);

      if (response.status === 201) {
        const newItem = response.data;
        dispatch({
          type: 'ADICIONAR_ITEM',
          payload: newItem,
        });
      } else {
        const errorData = response.data;
        console.error('Erro ao adicionar item ao carrinho:', errorData);
      }
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
    }
  }
};

export const removerItemDoCarrinho = (itemId) => {
  return async (dispatch) => {
    try {
      const response = await api.delete(`/cart/${itemId}`);

      if (response.status === 200) {
        dispatch({
          type: 'REMOVER_ITEM',
          payload: itemId,
        });
      } else {
        const errorData = response.data;
        console.error('Erro ao remover item do carrinho:', errorData);
      }
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
    }
  };
};
export const atualizarQuantidadeDoItem = (itemId, novaQuantidade) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`/cart/${itemId}`, { newQuantity: novaQuantidade });

      if (response.status === 200) {
        const updatedItem = response.data;
        dispatch({
          type: 'ALTERAR_QUANTIDADE_DO_ITEM',
          payload: { itemId_Q: itemId, newQuantity: updatedItem.quantity },
        });
      } else {
        const errorData = response.data;
        console.error('Erro ao atualizar a quantidade do item:', errorData);
      }
    } catch (error) {
      console.error('Erro ao atualizar a quantidade do item:', error);
    }
  };
};
