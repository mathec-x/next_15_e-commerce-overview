import { mockedProducts } from '@/utils/mocks/products';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, { params }: Params): Promise<NextResponse> {
  try {
    const { id } = await params;
    const product = mockedProducts.find(p => p.id === Number(id));

    if (!product) {
      return NextResponse.json(
        { message: 'Produto não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}