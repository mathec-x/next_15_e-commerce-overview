import React from 'react';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/views/product/ProductPage';
import { productServiceFactory } from '@/utils/services/productService';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function Page(props: ProductPageProps) {
  const { id } = await props.params;
  const product = await productServiceFactory.getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}

export async function generateMetadata(props: ProductPageProps) {
  const { id } = await props.params;
  const product = await productServiceFactory.getProduct(id);

  if (!product) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: `${product.title} - MatechStore`,
    description: product.description,
  };
}