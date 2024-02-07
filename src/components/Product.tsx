import { forwardRef } from 'react';
import {
	Image,
	ImageProps,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';

interface ProductDataProps {
	thumbnail: ImageProps;
	title: string;
	description: string;
}

interface ProductProps extends TouchableOpacityProps {
	data: ProductDataProps;
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(
	({ data, ...props }, ref) => {
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

				<View className='flex-1 space-y-[2px]'>
					<Text className='font-subtitle text-base text-slate-100'>
						{data.title}
					</Text>
					<Text className='font-normal text-xs text-slate-400 leading-5'>
						{data.description}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
);
