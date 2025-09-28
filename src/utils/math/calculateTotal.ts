import { CartItem } from "@/components/contexts/cart/cardTypes";

export const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);
};
