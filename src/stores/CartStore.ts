import { create } from 'zustand';

import { ProductProps } from '@/utils/data/products';

import * as cartInMemory from './helpers/CartInMemory';

export interface ProductCartProps extends ProductProps {
	quantity: number;
}

interface StateProps {
	products: ProductCartProps[];
	addToCart: (product: ProductProps) => void;
}

export const useCartStore = create<StateProps>(set => ({
	products: [],

	addToCart: (product: ProductProps) =>
		set(state => ({
			products: cartInMemory.add(state.products, product),
		})),
}));
