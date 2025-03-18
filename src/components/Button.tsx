import { buttonSizes, variantStyles } from '../assets/styles/buttonStyles';
import { ButtonProps } from '../interfaces/button.interface';

export function Button(props: ButtonProps) {
    return (
        <button
            className={`${variantStyles[props.variant]} 
                ${buttonSizes[props.size]}`}
        >
            <div className='flex'>
                <div className='self-center'>{props.startIcon}</div>
                <div className='px-2 self-center'>{props.text} </div>
                <div className='self-center'>{props.endIcon}</div>
            </div>
        </button>
    );
}
