import { ButtonSizes } from '../../enums/button.enums';
import { IconProps } from '../../interfaces/icons.interface';

const iconSizeVariants = (size:string): string => {
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

export const PlusIcon = (props:IconProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={iconSizeVariants(props.size)}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};
