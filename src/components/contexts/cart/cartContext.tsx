'use client';

import { Cart, Product } from "./cardTypes";
import { createContext } from "react";

interface CartContextType {
  cart: Cart;
  isLoaded: boolean;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  handleQuantityChange: (productId: number, newQuantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
