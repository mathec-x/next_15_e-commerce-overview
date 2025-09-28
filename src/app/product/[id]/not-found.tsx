'use client';

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Home, ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import FlexBox from '@/components/layout/FlexBox';

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'primary.main' }}>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Produto não encontrado
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          O produto que você está procurando não existe ou foi removido do catálogo.
        </Typography>
      </Box>

      <FlexBox gap={2}>
        <Button
          component={Link}
          href="/"
          variant="contained"
          startIcon={<Home />}
          size="large"
        >
          Voltar ao Início
        </Button>
        <Button
          onClick={() => window.history.back()}
          variant="outlined"
          startIcon={<ArrowBack />}
          size="large"
        >
          Página Anterior
        </Button>
      </FlexBox>
    </Container>
  );
}