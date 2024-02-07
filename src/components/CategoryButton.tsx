import { Pressable, PressableProps, Text } from 'react-native';

import clsx from 'clsx';

interface CategoryButtonProps extends PressableProps {
	title: string;
	isSelected?: boolean;
}

export const CategoryButton = ({
	title,
	isSelected,
	...props
}: CategoryButtonProps) => {
	return (
		<Pressable
			className={clsx(
				'justify-center h-10 bg-slate-800 px-4 font-subtitle text-sm text-slate-100 rounded-md',
				isSelected && 'border-2 border-lime-300'
			)}
			{...props}
		>
			<Text className='text-slate-100'>{title}</Text>
		</Pressable>
	);
};
