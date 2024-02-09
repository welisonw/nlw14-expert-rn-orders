import { Alert, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ProductCartProps, useCartStore } from '@/stores/CartStore';

import { formatCurrency } from '@/utils/functions/format-currency';

import { Header } from '@/components/Header';
import { Product } from '@/components/Product';
import { Input } from '@/components/Input';
import {
	BackMenuButton,
	Button,
	ButtonIcon,
	ButtonText,
} from '@/components/Button';
import { Feather } from '@expo/vector-icons';

const Cart = () => {
	const cartStore = useCartStore();

	const total = formatCurrency(
		cartStore.products.reduce((accum, curr) => {
			return accum + curr.price * curr.quantity;
		}, 0)
	);

	function handleProductRemove(product: ProductCartProps) {
		Alert.alert('Remover', `Deseja remover ${product.title} do carrinho?`, [
			{
				text: 'Cancelar',
			},
			{
				text: 'Remover',
				onPress: () => cartStore.removeFromCart(product.id),
			},
		]);
	}

	return (
		<View className='flex-1 pt-8 mx-5'>
			<Header title='Seu carrinho' />

			<KeyboardAwareScrollView>
				<ScrollView>
					{cartStore.products.length ? (
						<View className='flex-1 mt-3 border-b border-slate-700'>
							{cartStore.products.map(product => (
								<Product
									key={product.id}
									data={product}
									activeOpacity={1}
									deleteButton={() => handleProductRemove(product)}
								/>
							))}
						</View>
					) : (
						<View className='flex-1 items-center justify-center'>
							<Text className='font-body text-center text-slate-400'>
								Seu carrinho está vazio!
							</Text>
						</View>
					)}

					<View className='flex-row items-center gap-2 mb-4 pt-5'>
						<Text className='font-subtitle text-xl text-white'>Total:</Text>

						<Text className='font-heading text-2xl text-lime-400'>{total}</Text>
					</View>

					<Input placeholder='Informe o endereço de entrega com rua, número, complemento, bairro e CEP...' />
				</ScrollView>
			</KeyboardAwareScrollView>

			<View className='gap-5'>
				<Button>
					<ButtonText>Enviar pedido</ButtonText>
					<ButtonIcon>
						<Feather name='arrow-right-circle' size={20} />
					</ButtonIcon>
				</Button>

				<BackMenuButton title='Voltar ao cardápio' href='/' />
			</View>
		</View>
	);
};

export default Cart;
