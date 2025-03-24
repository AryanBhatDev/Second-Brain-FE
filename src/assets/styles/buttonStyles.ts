import { ButtonSizes, ButtonVariants } from '../../types/button.types';

export const variantStyles: Record<ButtonVariants, string> = {
    primary: 'bg-purple-500 text-white p-2 rounded-md',
    secondary: 'bg-cyan-500 text-purple-500 p-2 rounded-md',
};

export const buttonSizes: Record<ButtonSizes, string> = {
    sm: 'py-1 px-2',
    md: 'py-2 px-4',
    lg: 'py-3 px-6',
};
