import { ReactElement } from 'react';
import { ButtonSizes, ButtonVariants } from '../types/button.types';

export interface ButtonProps {
  variant: ButtonVariants;
  size?: ButtonSizes;
  text: string;
  startIcon?: ReactElement;
  onClick: () => void;
}
