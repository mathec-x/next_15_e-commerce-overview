'use client';

import React, { useEffect, useState } from 'react';
import {
  Drawer,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import CartContent from './CartContent';
import { useCart } from '@/components/contexts/cart/useCart';
import { Close } from '@mui/icons-material';
import FlexBox from '@/components/layout/FlexBox';

interface CartDrawerProps {
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = (props) => {
  const { getTotalItems } = useCart();
  const total = getTotalItems();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);

  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      props.onClose();
    }, 155); // Tempo para a animação de fechamento
  };

  return (
    <>
      <Drawer
        transitionDuration={155}
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: { width: { xs: '100%', sm: 350, md: 600 }, px: 4 }
          }
        }}
      >
        <FlexBox
          height={64}
          justifyContent='space-between'
        >
          <Typography variant="body2" fontWeight="bold">
            Carrinho ({total} {total === 1 ? 'item' : 'itens'})
          </Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </FlexBox>
        <Divider />
        <CartContent onClose={handleClose} />
      </Drawer >
    </>
  );
};

export default CartDrawer;