import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import FlexBox from './FlexBox';

interface ProductSelectorQuantityProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const ProductSelectorQuantity: React.FC<ProductSelectorQuantityProps> = ({ quantity, onQuantityChange }) => {
  return (
    <FlexBox justifyContent='flex-start'>
      <IconButton
        onClick={() => onQuantityChange(quantity - 1)}
        disabled={quantity <= 1}
        size="small"
      >
        <Remove />
      </IconButton>
      <Typography variant="body2" sx={{ mx: 1, minWidth: 20, textAlign: 'center' }}>
        {quantity}
      </Typography>
      <IconButton
        onClick={() => onQuantityChange(quantity + 1)}
        size="small"
      >
        <Add />
      </IconButton>
    </FlexBox>
  );
}

export default ProductSelectorQuantity;
