import {
  buttonSizes,
  defaultStyles,
  variantStyles,
} from '../assets/styles/buttonStyles';
import { ButtonProps } from '../interfaces/button.interface';

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        buttonSizes[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
      {props.text} {props.endIcon}
    </button>
  );
};
