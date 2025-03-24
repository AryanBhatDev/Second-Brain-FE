import type { SidebarItem } from '../../interfaces/sidebarItem.interface';

export function SidebarItem(props: SidebarItem) {
    return (
        <div className='flex py-2 justify'>
            <div className='pt-1 pr-2'>{props.icon}</div>
            <div>{props.title}</div>
        </div>
    );
}
