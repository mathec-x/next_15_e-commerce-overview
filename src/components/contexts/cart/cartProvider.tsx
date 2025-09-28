'use client';

import { useCartStorage } from "@/components/contexts/cart/useCartStorage";
import { Product } from "./cardTypes";
import { ReactNode, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { CartContext } from "./cartContext";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: { items: [], total: 0 },
    isLoaded: false
  });

  const { saveCart, loadCart, clearStorageCart } = useCartStorage();

  useEffect(() => {
    const savedCart = loadCart();
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: savedCart });
    }
    dispatch({ type: 'SET_LOADED', payload: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.isLoaded) {
      saveCart(state.cart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cart, state.isLoaded]);

  const addToCart = (product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    clearStorageCart();
  };

  const getTotalItems = () => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        isLoaded: state.isLoaded,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        handleQuantityChange
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
