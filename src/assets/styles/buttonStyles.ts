import { ButtonSizes, ButtonVariants } from '../../types/button.types';

export const variantStyles: Record<ButtonVariants,string> = {
    'primary': 'bg-[#5046e4] text-white',
    'secondary': 'bg-[#e0e7fe] text-[#5046e4]'
};

export const defaultStyles: string = 'rounded-md flex';

export const buttonSizes: Record<ButtonSizes,string> = {
    'sm':'py-1 px-2',
    'md':'py-2 px-4',
    'lg':'py-3 px-6'
};