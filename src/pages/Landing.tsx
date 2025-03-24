import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Card } from '../components/ui/Card';

export function Landing() {
    return (
        <div className='bg-white-500'>
            <div className='grid grid-cols-1 sm:grid-cols-[150px_auto] md:grid-cols-[250px_auto] gap-4 p-4'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <div className='pt-2'>
                        <Header />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                        <Card
                            type='twitter'
                            link='https://x.com/narendramodi/status/1903693037596823723'
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
