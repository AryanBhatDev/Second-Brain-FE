
import { PlusIcon } from './assets/icons/PlusIcon';
import { Button } from './components/ui/Button';



function App() {
    return (
        <div>
            <Button
                startIcon={<PlusIcon size='lg' />}
                variant='primary'
                size='md'
                onClick={() => {}}
                text={'Hello'}
            />
            <Button
                variant='secondary'
                size='sm'
                onClick={() => {}}
                text={'Add content'}
            />
        </div>
    );
}

export default App;
