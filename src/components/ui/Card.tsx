import { DeleteIcon } from '../../assets/icons/DeleteIcon';
import { ShareIcon } from '../../assets/icons/ShareIcon';
import { CardProps } from '../../interfaces/card.interface';

export function Card({ title, link, type }: CardProps) {
    return (
        <div className='p-4 rounded-md w-84 h-84 overflow-y-scroll bg-white border border-gray-200'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <ShareIcon />
                    <div className='pl-2 text-sm'>{title} </div>
                </div>
                <div className='flex items-center text-gray-500'>
                    <div className='pr-2'>
                        <a href={link} target='_blank'>
                            <ShareIcon />
                        </a>
                    </div>
                    <div>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
            <div className='pt-4 w-full'>
                {type === 'youtube' && (
                    <iframe
                        className='w-full'
                        src={link.replace('watch', 'embed').replace('?v=','/')}
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                    ></iframe>
                )}
                {type === 'twitter' && (
                    <div className='w-full h-full'>
                        <blockquote className='twitter-tweet'>
                            <a href={link.replace('x.com','twitter.com')}></a>
                        </blockquote>
                    </div>
                )}
            </div>
        </div>
    );
}
