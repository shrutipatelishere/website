'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { Medicine } from '@/data/medicines';

interface CartItem {
  medicine: Medicine;
  quantity: number;
  selectedVariantIndex: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { medicine: Medicine; quantity: number; variantIndex?: number } }
  | { type: 'REMOVE_ITEM'; payload: { medicineId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { medicineId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (medicine: Medicine, quantity?: number, variantIndex?: number) => void;
  removeFromCart: (medicineId: string) => void;
  updateQuantity: (medicineId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getRxItems: () => CartItem[];
  getOtcItems: () => CartItem[];
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.medicine.id === action.payload.medicine.id
      );

      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            medicine: action.payload.medicine,
            quantity: action.payload.quantity,
            selectedVariantIndex: action.payload.variantIndex || 0,
          },
        ],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.medicine.id !== action.payload.medicineId),
      };

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.medicine.id !== action.payload.medicineId),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.medicine.id === action.payload.medicineId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'LOAD_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('medwell-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Failed to load cart from localStorage');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('medwell-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (medicine: Medicine, quantity = 1, variantIndex = 0) => {
    dispatch({ type: 'ADD_ITEM', payload: { medicine, quantity, variantIndex } });
  };

  const removeFromCart = (medicineId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { medicineId } });
  };

  const updateQuantity = (medicineId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { medicineId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => {
      const variant = item.medicine.variants[item.selectedVariantIndex];
      return total + variant.price * item.quantity;
    }, 0);
  };

  const getCartCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const getRxItems = () => {
    return state.items.filter((item) => item.medicine.prescriptionRequired);
  };

  const getOtcItems = () => {
    return state.items.filter((item) => !item.medicine.prescriptionRequired);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        getRxItems,
        getOtcItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
