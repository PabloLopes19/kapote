import './App.css';

import Dashboard from './pages/Dashboard';
import { ModalProvider } from './Contexts/ModalContexts';

function App() {
  return (
    <ModalProvider>
      <Dashboard />
    </ModalProvider>
  );
}

export default App;
