import { HelmetProvider } from 'react-helmet-async';
import { AppRouter } from '@/app/Router';

function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;
