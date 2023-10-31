const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_ITEM':
      const novoItem = action.payload;
      const itemExistenteIndex = state.items.findIndex((item) => item.id === novoItem.id);

      if (itemExistenteIndex !== -1) {
        const updatedItems = state.items.map((item, index) => {
          if (index === itemExistenteIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          items: updatedItems,
          total: state.total + parseFloat(novoItem.price),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...novoItem, quantity: 1 }],
          total: state.total + parseFloat(novoItem.price),
        };
      }

      case 'REMOVER_ITEM':
        const itemIdToRemove = action.payload;
        const itemToRemove = state.items.find((item) => item.id === itemIdToRemove);
      
        if (!itemToRemove) {
          return {
            ...state,
            items: state.items.filter((item) => item.id !== itemIdToRemove),
          };
        }
      
        const updatedItems = state.items.filter((item) => item.id !== itemIdToRemove);
        const updatedTotal = state.total - parseFloat(itemToRemove.price) * itemToRemove.quantity;
        return {
          ...state,
          items: updatedItems,
          total: updatedTotal.toFixed(2),
        };
      

    case 'ALTERAR_QUANTIDADE_DO_ITEM':
      const { itemId_Q, newQuantity } = action.payload;
      const updatedItems_Q = state.items.map((item) => {
        if (item.id === itemId_Q) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      const updatedTotal_Q = updatedItems_Q.reduce((acc, item) => {
        return acc + parseFloat(item.price) * item.quantity;
      }, 0);

      return {
        ...state,
        items: updatedItems_Q,
        total: updatedTotal_Q.toFixed(2),
      };

    case 'EXIBIR_PAGINA_CONFIRMACAO':
      return {
        ...state,
        exibirPaginaConfirmacao: action.payload,
      };

    default:
      return state;
  }
};


export default cartReducer;