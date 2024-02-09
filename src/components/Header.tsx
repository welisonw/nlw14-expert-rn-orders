import { Image, Text, TouchableOpacity, View } from 'react-native';

import colors from 'tailwindcss/colors';

import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface HeaderProps {
	title: string;
	cartQuantityItems?: number;
}

export const Header = ({ title, cartQuantityItems = 0 }: HeaderProps) => {
	return (
		<View className='flex-row items-center pb-5 border-b border-slate-700'>
			<View className='flex-1'>
				<Image source={require('@/assets/logo.png')} className='w-32 h-6' />

				<Text className='font-heading text-xl text-white mt-2'>{title}</Text>
			</View>

			{cartQuantityItems > 0 && (
				<Link href='/cart' asChild>
					<TouchableOpacity className='relative' activeOpacity={0.7}>
						<View className='top-2 -right-3.5 z-10 items-center justify-center w-4 h-4 bg-lime-300 rounded-full'>
							<Text className='font-bold text-xs text-slate-900'>
								{cartQuantityItems}
							</Text>
						</View>

						<Feather name='shopping-bag' size={24} color={colors.white} />
					</TouchableOpacity>
				</Link>
			)}
		</View>
	);
};
