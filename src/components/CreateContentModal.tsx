import { CrossIcon } from '../assets/icons/CrossIcon';
import { ContentModalStates } from '../interfaces/modal.interface';
// import { Input } from './InputBar';
import { Button } from './ui/Button';

export function CreateContentModal({ isOpen,onClose }: ContentModalStates) {
    return (
        <div>
            {isOpen && (
                <div className='w-screen h-screen bg-slate-500 fixed
                top-0 left-0 opacity-60 flex justify-center'>
                    <div className='flex flex-col justify-center'>
                        <div className='bg-white opacity-100 p-4 rounded-md'>
                            <div onClick={onClose} className='flex justify-end'>
                                <CrossIcon />
                            </div>
                            <div className='grid grid-rows-2 gap-2'>
                                {/* <Input placeholder='Title'/>
                                <Input placeholder='Link'/> */}
                            </div>
                            <div className='flex justify-center pt-2'><Button variant='primary' text='Submit' /></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
