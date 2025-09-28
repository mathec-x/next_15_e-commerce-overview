'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge
} from '@mui/material';
import { ShoppingCart, Store } from '@mui/icons-material';
import { useCart } from '@/components/contexts/cart/useCart';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const router = useRouter();

  return (
    <AppBar position="sticky" elevation={1} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
      <Toolbar>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Store sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" component="div" color="primary.main" fontWeight="bold">
            MatechStore
          </Typography>
        </Link>

        <IconButton color="inherit" onClick={() => router.push('/cart')}>
          <Badge badgeContent={getTotalItems()} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;