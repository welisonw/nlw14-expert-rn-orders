import { PropsWithChildren } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Link, LinkProps } from 'expo-router';

interface ButtonProps extends TouchableOpacityProps, PropsWithChildren {}
interface ButtonTextProps extends PropsWithChildren {}
interface ButtonIconProps extends PropsWithChildren {}
interface BackMenuButtonProps extends LinkProps<string> {
	title: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<TouchableOpacity
			className='flex-row items-center justify-center h-12 bg-lime-400 rounded-md'
			activeOpacity={0.7}
			{...props}
		>
			{children}
		</TouchableOpacity>
	);
};

const ButtonText = ({ children }: ButtonTextProps) => {
	return (
		<Text className='mx-2 font-heading text-base text-black'>{children}</Text>
	);
};

const ButtonIcon = ({ children }: ButtonIconProps) => {
	return children;
};

const BackMenuButton = ({ title, ...props }: BackMenuButtonProps) => {
	return (
		<Link className='font-body text-center text-base text-slate-300' {...props}>
			{title}
		</Link>
	);
};

export { Button, ButtonText, ButtonIcon, BackMenuButton };
