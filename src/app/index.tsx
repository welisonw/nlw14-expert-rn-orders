import { Text, View } from 'react-native';
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	useFonts,
} from '@expo-google-fonts/inter';

import { Loading } from '@/components/Loading';
import { Header } from '@/components/Header';

export default function Home() {
	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	if (!fontsLoaded) return <Loading />;

	return (
		<View className='flex-1 pt-8'>
			<Header title='Faça seu pedido' cartQuantityItems={1} />
		</View>
	);
}
