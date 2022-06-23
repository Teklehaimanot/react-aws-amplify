import './App.css';
import AuthUser from './pages/AuthUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import ProtectedRoutes from './ProtectedRoutes';
import Signup from './components/signup/Signup';
import EmailConfirm from './components/pupup/EmailConfirm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthUser />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/confirmation" element={<EmailConfirm />} />
        </Routes>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
