import './App.css';
import { PlusIcon } from './assets/icons/PlusIcon';
import { Button } from './components/Button';

function App() {
    return (
        <div>
            <Button
                startIcon={<PlusIcon size='lg' />}
                variant='primary'
                size='sm'
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
