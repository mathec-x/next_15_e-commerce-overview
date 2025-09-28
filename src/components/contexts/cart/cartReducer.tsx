'use client';

import { Cart, CartItem, Product } from "./cardTypes";
import { calculateTotal } from "@/utils/math/calculateTotal";

interface CartState {
  cart: Cart;
  isLoaded: boolean;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CART'; payload: Cart }
  | { type: 'SET_LOADED'; payload: boolean };


export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload
      };

    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.cart.items.findIndex(
        item => item.product.id === product.id
      );

      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = state.cart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.cart.items, { product, quantity }];
      }

      return {
        ...state,
        cart: {
          items: newItems,
          total: calculateTotal(newItems)
        }
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.cart.items.filter(
        item => item.product.id !== action.payload.productId
      );
      return {
        ...state,
        cart: {
          items: newItems,
          total: calculateTotal(newItems)
        }
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { productId } });
      }

      const newItems = state.cart.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );

      return {
        ...state,
        cart: {
          items: newItems,
          total: calculateTotal(newItems)
        }
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: {
          items: [],
          total: 0
        }
      };

    case 'SET_CART':
      return {
        ...state,
        cart: action.payload
      };

    default:
      return state;
  }
};