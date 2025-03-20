import { buttonSizes, variantStyles } from '../../assets/styles/buttonStyles';
import { ButtonProps } from '../../interfaces/button.interface';


export function Button(props: ButtonProps) {
    return (
        <button
            className={`${variantStyles[props.variant]} 
                ${buttonSizes[props.size]}`}
        >
            <div className='flex'>
                <div>{props.startIcon}</div>
                <div>{props.text} </div>
            </div>
        </button>
    );
}
