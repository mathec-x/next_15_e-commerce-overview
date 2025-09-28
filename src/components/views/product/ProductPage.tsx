'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Button,
  Chip,
  Snackbar,
  Alert,
  Stack,
  Divider
} from '@mui/material';
import { ShoppingCart, Favorite, Share } from '@mui/icons-material';
import { useCart } from '@/components/contexts/cart/useCart';
import { Product } from '@/components/contexts/cart/cardTypes';
import { formatPrice } from '@/utils/math/formatPrice';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ProductSelectorQuantity from '@/components/layout/ProductSelectorQuantity';
import { calculatePercentage } from '@/utils/math/calculatePercentage';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const router = useRouter();
  const { addToCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    // Adiciona ao contexto local
    addToCart(product, quantity);
    setSnackbarOpen(true);
    setQuantity(1); // Reset quantity after adding
    router.push('/cart');
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {/* Imagem do produto */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ position: 'sticky', top: 72, minHeight: '350px' }}>
            <Image
              fill
              priority
              src={product.image}
              alt={product.title}
              style={{ objectFit: 'contain', padding: 16 }}
            />
          </Card>
        </Grid>

        {/* Detalhes do produto */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ pl: { md: 2 } }}>
            {/* Categoria */}
            <Chip
              label={product.category}
              size="small"
              sx={{ mb: 2 }}
              color="primary"
              variant="outlined"
            />

            {/* Nome do produto */}
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
              {product.title}
            </Typography>

            {/* Preços */}
            <Box sx={{ mb: 3 }}>
              <Stack direction="row" alignItems="baseline" spacing={2}>
                <Typography variant="h5" color="primary" fontWeight="bold">
                  {formatPrice(product.price)}
                </Typography>
                {product.originalPrice && (
                  <>
                    <Typography
                      variant="body1"
                      sx={{ textDecoration: 'line-through' }}
                      color="text.secondary"
                    >
                      {formatPrice(product.originalPrice)}
                    </Typography>
                    <Chip
                      label={`-${calculatePercentage(product.originalPrice, product.price)}%`}
                      size="small"
                      color="secondary"
                    />
                  </>
                )}
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body1" color="text.secondary" paragraph>
              {product.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Chip
                label={product.inStock ? "Em estoque" : "Fora de estoque"}
                color={product.inStock ? "success" : "error"}
                variant="outlined"
              />
            </Box>

            {/* Seletor de quantidade */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Quantidade:
              </Typography>
              <ProductSelectorQuantity quantity={quantity} onQuantityChange={handleQuantityChange} />
            </Box>

            {/* Botões de ação */}
            <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                fullWidth
              >
                Adicionar ao Carrinho
              </Button>

              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  startIcon={<Favorite />}
                  sx={{ flex: 1 }}
                >
                  Favoritar
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Share />}
                  sx={{ flex: 1 }}
                >
                  Compartilhar
                </Button>
              </Stack>
            </Stack>

            {/* Informações adicionais */}
            <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Informações de Entrega:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Entrega grátis para compras acima de R$ 199,00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Prazo de entrega: 3-7 dias úteis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Garantia de 12 meses
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar de confirmação */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
        >
          Produto adicionado ao carrinho com sucesso!
        </Alert>
      </Snackbar>
    </Container >
  );
};

export default ProductPage;