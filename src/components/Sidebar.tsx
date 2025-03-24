import { BrainIcon } from '../assets/icons/BrainIcon';
import { DocIcon } from '../assets/icons/DocumentsIcon';
import { LinksIcon } from '../assets/icons/LinksIcon';
import { TagsIcon } from '../assets/icons/TagsIcon';
import { TweetIcon } from '../assets/icons/TweetIcon';
import { VideoIcon } from '../assets/icons/VideoIcon';
import { SidebarItem } from './ui/SidebarItem';

export function Sidebar() {
    return (
        <div>
            <div className='flex justify-between w-35'>
                <div>
                    <BrainIcon />
                </div>
                <div className='pt-1 font-bold'>
                    Second Brain
                </div>
            </div>
            <div className='pt-8 pl-5 grid grid-rows-5 gap-1'>
                <SidebarItem icon={<TweetIcon />} title={'Tweets'} />
                <SidebarItem icon={<VideoIcon />} title={'Videos'} />
                <SidebarItem icon={<DocIcon />} title={'Documents'} />
                <SidebarItem icon={<LinksIcon />} title={'Links'} />
                <SidebarItem icon={<TagsIcon />} title={'Tags'} />
            </div>
        </div>
    );
}
