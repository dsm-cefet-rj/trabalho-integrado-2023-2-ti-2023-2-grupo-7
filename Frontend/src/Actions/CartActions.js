export const adicionarItemAoCarrinho = (item) => ({
  type: 'ADICIONAR_ITEM',
  payload: item,
});

export const removerItemDoCarrinho = (itemId) => ({
  type: 'REMOVER_ITEM',
  payload: itemId,
});

export const atualizarQuantidadeDoItem = (itemId, novaQuantidade) => ({
  type: 'ALTERAR_QUANTIDADE_DO_ITEM',
  payload: { itemId_Q: itemId, newQuantity: novaQuantidade },
});
