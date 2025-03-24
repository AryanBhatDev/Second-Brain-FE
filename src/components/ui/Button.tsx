import { variantStyles } from '../../assets/styles/buttonStyles';
import { ButtonProps } from '../../interfaces/button.interface';


export function Button(props: ButtonProps) {
    return (
        <button
            className={`${variantStyles[props.variant]}`}
        >
            <div className='flex items-center'>
                {props.startIcon ? <div className='pr-1'>{props.startIcon}</div> : null}
                <div>{props.text} </div>
            </div>
        </button>
    );
}
