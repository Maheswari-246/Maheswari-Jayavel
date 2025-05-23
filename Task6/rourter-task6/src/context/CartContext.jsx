import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) return state.filter(item => item.id !== action.payload.id);
      return [...state, { ...action.payload, quantity: 1 }];
    
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);

    case 'INCREASE_QUANTITY':
      return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);

    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);