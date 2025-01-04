import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './app/firebase';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
                    <App />
);
