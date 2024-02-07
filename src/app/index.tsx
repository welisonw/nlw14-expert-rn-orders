import { FlatList, Text, View } from 'react-native';
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	useFonts,
} from '@expo-google-fonts/inter';

import { CATEGORIES } from '@/utils/data/products';

import { Loading } from '@/components/Loading';
import { Header } from '@/components/Header';
import { CategoryButton } from '@/components/CategoryButton';
import { useState } from 'react';

export default function Home() {
	const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);

	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	if (!fontsLoaded) return <Loading />;

	function handleCategorySelect(selectedCategory: string) {
		setCategorySelected(selectedCategory);
	}

	return (
		<View className='flex-1 pt-8'>
			<Header title='Faça seu pedido' cartQuantityItems={1} />

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
		</View>
	);
}
