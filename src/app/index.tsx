import { Text, View } from 'react-native';
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	useFonts,
} from '@expo-google-fonts/inter';

export default function Home() {
	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	return (
		<View className='flex-1'>
			<Text className='text-white text-2xl'>Hello, World</Text>
		</View>
	);
}
