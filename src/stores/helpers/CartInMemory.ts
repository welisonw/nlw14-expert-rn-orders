import { ProductCartProps } from '../CartStore';
import { ProductProps } from '@/utils/data/products';

export function add(products: ProductCartProps[], newProduct: ProductProps) {
	const existingProduct = products.find(
		product => product.id === newProduct.id
	);

	if (existingProduct) {
		return products.map(product =>
			product.id === existingProduct.id
				? { ...product, quantity: product.quantity + 1 }
				: product
		);
	}

	return [...products, { ...newProduct, quantity: 1 }];
}
