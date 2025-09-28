'use client';

import { Cart } from "./cardTypes";


const CART_STORAGE_KEY = 'ecommerce-cart';

export const useCartStorage = () => {
  const saveCart = (cart: Cart) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      }
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error);
    }
  };

  const loadCart = (): Cart | null => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : null;
      }
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error);
    }
    return null;
  };

  const clearStorageCart = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    } catch (error) {
      console.warn('Failed to clear cart from localStorage:', error);
    }
  };

  return { saveCart, loadCart, clearStorageCart };
};
