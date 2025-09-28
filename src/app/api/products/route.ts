import { mockedProducts } from '@/utils/mocks/products';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    return NextResponse.json(mockedProducts);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}