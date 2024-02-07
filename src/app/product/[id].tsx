import { Image, Text, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { PRODUCTS } from '@/utils/data/products';
import { formatCurrency } from '@/utils/functions/format-currency';

import { useCartStore } from '@/stores/CartStore';

import {
	BackMenuButton,
	Button,
	ButtonIcon,
	ButtonText,
} from '@/components/Button';

const Product = () => {
	const cartStore = useCartStore();

	const navigation = useNavigation();

	const { id } = useLocalSearchParams();

	const product = PRODUCTS.filter(product => product.id === id)[0];

	function handleAddToCart() {
		cartStore.addToCart(product);

		navigation.goBack();
	}

	return (
		<View className='flex-1'>
			<Image
				source={product.cover}
				alt='Foto do produto'
				resizeMode='cover'
				className='w-full h-56'
			/>

			<View className='flex-1 mt-8 p-5'>
				<Text className='font-subtitle text-xl text-white'>
					{product.title}
				</Text>

				<Text className='my-2 font-heading text-2xl text-lime-400'>
					{formatCurrency(product.price)}
				</Text>

				<View>
					<Text className='mb-6 font-body text-base text-slate-400 leading-6'>
						{product.description}
					</Text>

					{product.ingredients.map(ingredient => (
						<Text
							key={ingredient}
							className='font-body text-base text-slate-400 leading-6'
						>
							{'\u2022'} {ingredient}
						</Text>
					))}
				</View>
			</View>

			<View className='gap-5 p-5 pb-8'>
				<Button onPress={handleAddToCart}>
					<ButtonIcon>
						<Feather name='plus-circle' size={20} />
					</ButtonIcon>

					<ButtonText>Adicionar ao pedido</ButtonText>
				</Button>

				<BackMenuButton title='Voltar ao cardápio' href='/' />
			</View>
		</View>
	);
};

export default Product;
