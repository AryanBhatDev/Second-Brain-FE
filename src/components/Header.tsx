import { PlusIcon } from '../assets/icons/PlusIcon';
import { ShareIcon } from '../assets/icons/ShareIcon';
import { Button } from './ui/Button';

export function Header() {
    return (
        <div className='flex justify-between p-2'>
            <div className='text-2xl font-semibold'>
                All Notes
            </div>
            <div className='flex w-65 justify-between '>
                <div>
                    <Button
                        startIcon={<ShareIcon />}
                        variant='secondary'
                        onClick={() => {}}
                        text={'Share Brain'}
                    />
                </div>
                <div>
                    <Button
                        startIcon={<PlusIcon />}
                        variant='primary'
                        onClick={() => {}}
                        text={'Add content'}
                    />
                </div>
            </div>
        </div>
    );
}
