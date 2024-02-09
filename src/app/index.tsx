import { useRef, useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import { Link } from 'expo-router';
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	useFonts,
} from '@expo-google-fonts/inter';

import { useCartStore } from '@/stores/CartStore';

import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products';

import { Loading } from '@/components/Loading';
import { Header } from '@/components/Header';
import { CategoryButton } from '@/components/CategoryButton';
import { Product } from '@/components/Product';


export default function Home() {
	const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);

	const cartStore = useCartStore();

	const sectionListRef = useRef<SectionList<ProductProps>>(null);

	const cartQuantityItems = cartStore.products.reduce(
		(accum, curr) => accum + curr.quantity,
		0
	);

	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	if (!fontsLoaded) return <Loading />;

	function handleCategorySelect(selectedCategory: string) {
		const sectionIndex = CATEGORIES.findIndex(
			category => category === selectedCategory
		);

		setCategorySelected(selectedCategory);

		if (sectionListRef.current) {
			sectionListRef.current.scrollToLocation({
				itemIndex: 0,
				sectionIndex,
				animated: true,
			});
		}
	}

	return (
		<View className='flex-1 pt-8'>
			<Header title='Faça seu pedido' cartQuantityItems={cartQuantityItems} />

			<FlatList
				data={CATEGORIES}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<CategoryButton
						title={item}
						isSelected={item === categorySelected}
						onPress={() => handleCategorySelect(item)}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					gap: 12,
					paddingHorizontal: 20,
				}}
				className='max-h-10 mt-5'
			/>

			<SectionList
				ref={sectionListRef}
				sections={MENU}
				keyExtractor={item => item.id}
				renderSectionHeader={({ section: { title } }) => (
					<Text className='font-semibold text-xl text-white mb-3'>{title}</Text>
				)}
				renderItem={({ item }) => (
					<Link href={`/product/${item.id}`} asChild>
						<Product data={item} />
					</Link>
				)}
				stickySectionHeadersEnabled={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 20,
					paddingBottom: 50,
				}}
				className='flex-1 mt-8'
			/>
		</View>
	);
}
