import { Product } from "@/components/contexts/cart/cardTypes";
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Stack
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import { formatPrice } from "@/utils/math/formatPrice";
import { calculatePercentage } from "@/utils/math/calculatePercentage";
import ProductCard from "./ProductCard";

interface ProductsPageProps {
  products: Array<Product>;
}

const ProductsPage = ({ products }: ProductsPageProps) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Bem-vindo à MatechStore
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Descubra os melhores produtos de tecnologia com preços incríveis e entrega rápida
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          Produtos em Destaque
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Confira nossa seleção especial de produtos tecnológicos
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
              <ProductCard
                imgSrc={product.image}
                title={product.title}
                category={product.category}
                discountPercentage={calculatePercentage(product.originalPrice, product.price)}
                isEnabled={product.inStock}
                action={`/product/${product.id}`}
                actions={
                  <Button
                    component={Link}
                    href={`/product/${product.id}`}
                    startIcon={<ShoppingCart />}
                    fullWidth
                  >
                    Ver Produto
                  </Button>
                }
              >
                <Typography variant="h6" component="h3" gutterBottom noWrap>
                  {product.title}
                </Typography>
                <Stack direction="row" alignItems="baseline" spacing={1}>
                  <Typography variant="body2" color="primary" fontWeight="bold" fontSize="1rem">
                    {formatPrice(product.price)}
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: 'line-through' }}
                      fontSize="0.875rem"
                      color="text.secondary"
                    >
                      {formatPrice(product.originalPrice)}
                    </Typography>
                  )}
                </Stack>
              </ProductCard>
            </Grid>
          )
        })}
      </Grid>
      <Footer />
    </Container>
  );
}

export default ProductsPage;
