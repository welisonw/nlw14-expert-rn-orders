import { TextInput, TextInputProps } from 'react-native';

import colors from 'tailwindcss/colors';

export const Input = ({ ...props }: TextInputProps) => {
	return (
		<TextInput
			placeholderTextColor={colors.slate[400]}
			textAlignVertical='top'
			multiline
			className='h-32 px-4 py-3 font-body text-sm text-white bg-slate-800 rounded-md'
			{...props}
		/>
	);
};
