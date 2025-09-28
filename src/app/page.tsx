import React from 'react';
import ProductsPage from '@/components/views/products/productsPage';
import { productServiceFactory } from '@/utils/services/productService';
import { notFound } from 'next/navigation';

export default async function Home() {
  const products = await productServiceFactory.listProducts();

  if (!products) {
    notFound();
  }

  return <ProductsPage products={products} />;
}

export async function generateMetadata() {
  const products = await productServiceFactory.listProducts();

  if (!products) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: `Produtos - MatechStore`,
    description: 'Encontre os melhores produtos aqui.',
  };
}
