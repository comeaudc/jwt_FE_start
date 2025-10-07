import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth/Index';
import Dashboard from './pages/dashboard/Index';
import Navbar from './components/navbar/Index';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <h2>My App</h2>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
