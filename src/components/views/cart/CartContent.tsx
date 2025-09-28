'use client';

import React from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useCart } from '@/components/contexts/cart/useCart';
import { formatPrice } from '@/utils/math/formatPrice';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';
import CartListContainer from './CartListContainer';
import ProductSelectorQuantity from '@/components/layout/ProductSelectorQuantity';


interface CartContentProps {
  onClose: () => void;
}

const CartContent: React.FC<CartContentProps> = ({ onClose }) => {
  const { cart, removeFromCart, handleQuantityChange } = useCart();

  if (cart.items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <CartListContainer
      onClose={onClose}
      total={formatPrice(cart.total)}
      onCheckout={() => alert('Função de checkout ainda não implementada')}
    >
      {cart.items.map((item) => (
        <CartItem
          key={item.product.id}
          title={item.product.title}
          imgSrc={item.product.image}
          action={
            <IconButton
              edge="end"
              aria-label="remover"
              onClick={() => removeFromCart(item.product.id)}
              color="error"
            >
              <Delete />
            </IconButton>}
        >
          <Box>
            <Typography variant="body2" noWrap>
              {item.product.title}
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="bold">
              {formatPrice(item.product.price)}
            </Typography>
            <ProductSelectorQuantity
              quantity={item.quantity}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.product.id, newQuantity)}
            />
          </Box>
        </CartItem>
      ))}
    </CartListContainer>
  );
}

export default CartContent;