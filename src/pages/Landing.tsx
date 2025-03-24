import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Card } from '../components/ui/Card';

export function Landing() {
    return (
        <div className='bg-white-500 min-h-screen'>
            <div className='flex flex-row'>
                <div className='w-[25%] min-w-[150px] max-w-[250px]'>
                    <Sidebar />
                </div>

                <div className='flex-1 p-4'>
                    <div className='pt-2'>
                        <Header />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-4'>
                        <Card
                            type='twitter'
                            link='https://x.com/josh_uglyasf/status/1903853143303057747'
                            title='Tweet'
                        />
                        <Card
                            type='youtube'
                            link='https://www.youtube.com/watch?v=t2CEgPsws3U'
                            title='Yt video'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
