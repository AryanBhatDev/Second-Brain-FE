import { ButtonSizes } from '../enums/button.enums';

export const iconSizeVariants = (size: string): string => {
    switch (size) {
        case ButtonSizes.SMALL:
            return 'size-2';
        case ButtonSizes.MEDIUM:
            return 'size-4';
        case ButtonSizes.LARGE:
            return 'size-6';
        default:
            return 'size-4';
    }
};
