import { forwardRef } from 'react';
import {
	Image,
	ImageProps,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import colors from 'tailwindcss/colors';

interface ProductDataProps {
	thumbnail: ImageProps;
	title: string;
	description: string;
	quantity?: number;
}

interface ProductProps extends TouchableOpacityProps {
	data: ProductDataProps;
	deleteButton?: () => void;
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(
	({ data, deleteButton, ...props }, ref) => {
		return (
			<TouchableOpacity
				className='w-full flex-row items-center pb-4 space-x-3'
				activeOpacity={0.7}
				ref={ref}
				{...props}
			>
				<Image
					source={data.thumbnail}
					alt='Foto do lanche'
					className='w-[92px] h-[92px] rounded-md'
				/>

				<View className='flex-1 space-y-1'>
					<View className='flex-row items-center'>
						<Text className='flex-1 font-subtitle text-base text-slate-100'>
							{data.title}
						</Text>

						{deleteButton && (
							<TouchableOpacity onPress={deleteButton}>
								<Feather
									name='trash-2'
									size={19}
									color={colors.red[500]}
									style={{ padding: 2 }}
								/>
							</TouchableOpacity>
						)}
					</View>

					{data.quantity && (
						<Text className='font-subtitle text-sm text-slate-400'>
							quantidade: {data.quantity}
						</Text>
					)}

					<Text className='font-normal text-xs text-slate-400 leading-5'>
						{data.description}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
);
