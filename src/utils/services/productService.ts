import type { Product } from "@/components/contexts/cart/cardTypes";
import { mockedProducts } from "../mocks/products";

class ProductService {
	async listProducts(): Promise<Product[] | null> {
		try {
			const url = `${process.env.NEXT_PUBLIC_PRODUCTS_SERVICE_API_URL}/products`
			console.log('fetching url:', url)
			const response = await fetch(url, {
				next: {
					revalidate: 60
				}
			});

			console.log('response status', response.status)
			if (!response.ok) {
				return mockedProducts;
			}

			const data: Product[] = await response.json();
			return data;
		} catch (error) {
			console.error('Erro ao buscar produto:', error);
			return null;
		}
	}

	async getProduct(id: string): Promise<Product | null> {
		try {
			const url = `${process.env.NEXT_PUBLIC_PRODUCTS_SERVICE_API_URL}/products/${id}`
			console.log('fetching url:', url)
			const response = await fetch(url, {
				next: {
					revalidate: 60
				}
			});

			console.log('response status', response.status)
			if (!response.ok) {
				return null;
			}

			const data: Product = await response.json();
			return data;
		} catch (error) {
			console.error('Erro ao buscar produto:', error);
			return null;
		}
	}
}


export const productServiceFactory = new ProductService()

